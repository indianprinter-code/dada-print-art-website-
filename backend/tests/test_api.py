"""
Backend API Tests for DADA PRINT ART
Tests: /api/, /api/contact (POST, GET), /api/quote (POST, GET)
Includes validation tests for email and required fields
"""
import pytest
import requests
import os
import uuid

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestHealthEndpoint:
    """Test API root endpoint"""
    
    def test_api_root_returns_welcome_message(self):
        """GET /api/ should return welcome message"""
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        assert "DADA PRINT ART API is running" in data["message"]
        print(f"✓ API root returns: {data['message']}")


class TestContactEndpoint:
    """Test /api/contact POST and GET endpoints"""
    
    def test_create_contact_with_required_fields(self):
        """POST /api/contact with required fields (name, email, message)"""
        unique_id = str(uuid.uuid4())[:8]
        payload = {
            "name": f"TEST_User_{unique_id}",
            "email": f"test_{unique_id}@example.com",
            "message": "This is a test message for contact form"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 200, f"Expected 200, got {response.status_code}: {response.text}"
        
        data = response.json()
        assert "id" in data, "Response should contain 'id'"
        assert "created_at" in data, "Response should contain 'created_at'"
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["message"] == payload["message"]
        print(f"✓ Contact created with id: {data['id']}")
        return data["id"]
    
    def test_create_contact_with_optional_fields(self):
        """POST /api/contact with all fields including optional (phone, subject)"""
        unique_id = str(uuid.uuid4())[:8]
        payload = {
            "name": f"TEST_User_{unique_id}",
            "email": f"test_{unique_id}@example.com",
            "phone": "+91 98765 43210",
            "subject": "Test Subject",
            "message": "This is a test message with all fields"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 200, f"Expected 200, got {response.status_code}: {response.text}"
        
        data = response.json()
        assert data["phone"] == payload["phone"]
        assert data["subject"] == payload["subject"]
        print(f"✓ Contact created with optional fields, id: {data['id']}")
    
    def test_list_contacts_returns_list(self):
        """GET /api/contact should return list of contacts"""
        response = requests.get(f"{BASE_URL}/api/contact")
        assert response.status_code == 200
        
        data = response.json()
        assert isinstance(data, list), "Response should be a list"
        
        # Check that _id is not in response (MongoDB ObjectId should be excluded)
        if len(data) > 0:
            first_contact = data[0]
            assert "_id" not in first_contact, "MongoDB _id should not be in response"
            assert "id" in first_contact, "Response should have 'id' field"
            print(f"✓ Listed {len(data)} contacts, no MongoDB _id exposed")
        else:
            print("✓ Contact list returned (empty)")
    
    def test_contact_invalid_email_returns_422(self):
        """POST /api/contact with invalid email should return 422"""
        payload = {
            "name": "Test User",
            "email": "invalid-email-format",
            "message": "Test message"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 422, f"Expected 422 for invalid email, got {response.status_code}"
        print("✓ Invalid email correctly returns 422")
    
    def test_contact_missing_required_fields_returns_422(self):
        """POST /api/contact with missing required fields should return 422"""
        # Missing name
        payload = {
            "email": "test@example.com",
            "message": "Test message"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 422, f"Expected 422 for missing name, got {response.status_code}"
        
        # Missing email
        payload = {
            "name": "Test User",
            "message": "Test message"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 422, f"Expected 422 for missing email, got {response.status_code}"
        
        # Missing message
        payload = {
            "name": "Test User",
            "email": "test@example.com"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 422, f"Expected 422 for missing message, got {response.status_code}"
        print("✓ Missing required fields correctly return 422")


class TestQuoteEndpoint:
    """Test /api/quote POST and GET endpoints"""
    
    def test_create_quote_with_required_fields(self):
        """POST /api/quote with required fields"""
        unique_id = str(uuid.uuid4())[:8]
        payload = {
            "company": f"TEST_Company_{unique_id}",
            "name": f"TEST_User_{unique_id}",
            "email": f"test_{unique_id}@example.com",
            "phone": "+91 98765 43210",
            "industry": "Pharmaceuticals",
            "label_type": "Self-adhesive"
        }
        response = requests.post(f"{BASE_URL}/api/quote", json=payload)
        assert response.status_code == 200, f"Expected 200, got {response.status_code}: {response.text}"
        
        data = response.json()
        assert "id" in data, "Response should contain 'id'"
        assert "created_at" in data, "Response should contain 'created_at'"
        assert data["company"] == payload["company"]
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["phone"] == payload["phone"]
        assert data["industry"] == payload["industry"]
        assert data["label_type"] == payload["label_type"]
        print(f"✓ Quote created with id: {data['id']}")
        return data["id"]
    
    def test_create_quote_with_optional_fields(self):
        """POST /api/quote with all fields including optional (quantity, details)"""
        unique_id = str(uuid.uuid4())[:8]
        payload = {
            "company": f"TEST_Company_{unique_id}",
            "name": f"TEST_User_{unique_id}",
            "email": f"test_{unique_id}@example.com",
            "phone": "+91 98765 43210",
            "industry": "Cosmetics",
            "label_type": "Die-cut",
            "quantity": "50,000 pcs/month",
            "details": "Need premium foil stamping finish"
        }
        response = requests.post(f"{BASE_URL}/api/quote", json=payload)
        assert response.status_code == 200, f"Expected 200, got {response.status_code}: {response.text}"
        
        data = response.json()
        assert data["quantity"] == payload["quantity"]
        assert data["details"] == payload["details"]
        print(f"✓ Quote created with optional fields, id: {data['id']}")
    
    def test_list_quotes_returns_list(self):
        """GET /api/quote should return list of quotes"""
        response = requests.get(f"{BASE_URL}/api/quote")
        assert response.status_code == 200
        
        data = response.json()
        assert isinstance(data, list), "Response should be a list"
        
        # Check that _id is not in response (MongoDB ObjectId should be excluded)
        if len(data) > 0:
            first_quote = data[0]
            assert "_id" not in first_quote, "MongoDB _id should not be in response"
            assert "id" in first_quote, "Response should have 'id' field"
            print(f"✓ Listed {len(data)} quotes, no MongoDB _id exposed")
        else:
            print("✓ Quote list returned (empty)")
    
    def test_quote_invalid_email_returns_422(self):
        """POST /api/quote with invalid email should return 422"""
        payload = {
            "company": "Test Company",
            "name": "Test User",
            "email": "not-an-email",
            "phone": "+91 98765 43210",
            "industry": "FMCG",
            "label_type": "Roll form"
        }
        response = requests.post(f"{BASE_URL}/api/quote", json=payload)
        assert response.status_code == 422, f"Expected 422 for invalid email, got {response.status_code}"
        print("✓ Invalid email correctly returns 422")
    
    def test_quote_missing_required_fields_returns_422(self):
        """POST /api/quote with missing required fields should return 422"""
        # Missing company
        payload = {
            "name": "Test User",
            "email": "test@example.com",
            "phone": "+91 98765 43210",
            "industry": "FMCG",
            "label_type": "Roll form"
        }
        response = requests.post(f"{BASE_URL}/api/quote", json=payload)
        assert response.status_code == 422, f"Expected 422 for missing company, got {response.status_code}"
        
        # Missing phone
        payload = {
            "company": "Test Company",
            "name": "Test User",
            "email": "test@example.com",
            "industry": "FMCG",
            "label_type": "Roll form"
        }
        response = requests.post(f"{BASE_URL}/api/quote", json=payload)
        assert response.status_code == 422, f"Expected 422 for missing phone, got {response.status_code}"
        
        # Missing industry
        payload = {
            "company": "Test Company",
            "name": "Test User",
            "email": "test@example.com",
            "phone": "+91 98765 43210",
            "label_type": "Roll form"
        }
        response = requests.post(f"{BASE_URL}/api/quote", json=payload)
        assert response.status_code == 422, f"Expected 422 for missing industry, got {response.status_code}"
        print("✓ Missing required fields correctly return 422")


class TestDataPersistence:
    """Test that data is actually persisted in database"""
    
    def test_contact_persists_in_database(self):
        """Create contact and verify it appears in list"""
        unique_id = str(uuid.uuid4())[:8]
        payload = {
            "name": f"TEST_Persist_{unique_id}",
            "email": f"persist_{unique_id}@example.com",
            "message": "Testing persistence"
        }
        
        # Create
        create_response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert create_response.status_code == 200
        created_id = create_response.json()["id"]
        
        # Verify in list
        list_response = requests.get(f"{BASE_URL}/api/contact")
        assert list_response.status_code == 200
        contacts = list_response.json()
        
        found = any(c["id"] == created_id for c in contacts)
        assert found, f"Created contact {created_id} not found in list"
        print(f"✓ Contact {created_id} persisted and found in list")
    
    def test_quote_persists_in_database(self):
        """Create quote and verify it appears in list"""
        unique_id = str(uuid.uuid4())[:8]
        payload = {
            "company": f"TEST_Persist_{unique_id}",
            "name": f"TEST_User_{unique_id}",
            "email": f"persist_{unique_id}@example.com",
            "phone": "+91 12345 67890",
            "industry": "Food & Beverage",
            "label_type": "Laminated"
        }
        
        # Create
        create_response = requests.post(f"{BASE_URL}/api/quote", json=payload)
        assert create_response.status_code == 200
        created_id = create_response.json()["id"]
        
        # Verify in list
        list_response = requests.get(f"{BASE_URL}/api/quote")
        assert list_response.status_code == 200
        quotes = list_response.json()
        
        found = any(q["id"] == created_id for q in quotes)
        assert found, f"Created quote {created_id} not found in list"
        print(f"✓ Quote {created_id} persisted and found in list")


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
