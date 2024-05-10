from django.test import TestCase
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import check_password

class UsersManagersTests(TestCase):

    def test_create_user(self):
        User = get_user_model()
        user = User.objects.create_user(
            email="fricheese@user.com", 
            password="foo",
            name="Fricilia Nelika Pranata", 
            age=20,
            phone=6285334277450,
            address="Kejaksaan Barat, no IX, Jawa Tengah"
            )
        self.assertEqual(user.email, "fricheese@user.com")
        self.assertFalse(user.is_admin)
        self.assertTrue(user.is_user)
        self.assertTrue(check_password("foo", user.password))


    def test_create_adminuser(self):
        User = get_user_model()
        admin_user = User.objects.create_adminuser(email="fricheese@user.com", 
            password="foo",
            name="Fricilia Nelika Pranata", 
            age=20,
            phone=6285334277450,
            address="Kejaksaan Barat, no IX, Jawa Tengah")
        self.assertEqual(admin_user.email, "fricheese@user.com")
        self.assertTrue(admin_user.is_admin)
        self.assertTrue(admin_user.is_user)
        self.assertTrue(check_password("foo", admin_user.password))


