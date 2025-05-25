import React, { createContext, useState, useEffect } from 'react';

// Create the authentication context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check for existing user session on load
  useEffect(() => {
    const storedUser = localStorage.getItem('agrimarket_user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setCurrentUser(user);
      } catch (err) {
        console.error('Failed to parse stored user data:', err);
        localStorage.removeItem('agrimarket_user');
      }
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      // In a real implementation, this would make an API call
      // For demo purposes, we'll simulate a successful login
      // with hardcoded user data based on email
      let userData;

      if (email === 'farmer@example.com') {
        userData = {
          id: 'f123',
          fullName: 'John Farmer',
          email: 'farmer@example.com',
          userType: 'farmer',
          farmName: 'Green Acres Farm',
          cropTypes: ['Tomatoes', 'Cucumbers', 'Lettuce'],
          primaryLocation: {
            latitude: 37.7749,
            longitude: -122.4194,
            address: '123 Farm Road',
            city: 'Farmville',
            state: 'CA',
            country: 'USA',
            postalCode: '94111'
          }
        };
      } else if (email === 'buyer@example.com') {
        userData = {
          id: 'b456',
          fullName: 'Sarah Buyer',
          email: 'buyer@example.com',
          userType: 'buyer',
          businessName: 'Fresh Foods Market',
          businessType: 'Grocery Store',
          preferredProducts: ['Organic Vegetables', 'Fresh Fruits'],
          primaryLocation: {
            latitude: 37.7833,
            longitude: -122.4167,
            address: '456 Market Street',
            city: 'San Francisco',
            state: 'CA',
            country: 'USA',
            postalCode: '94103'
          }
        };
      } else {
        throw new Error('Invalid credentials');
      }

      // Store user data in localStorage
      localStorage.setItem('agrimarket_user', JSON.stringify(userData));
      setCurrentUser(userData);
      return userData;
    } catch (err) {
      setError(err.message || 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Registration function
  const register = async (userData) => {
    setLoading(true);
    setError(null);

    try {
      // In a real implementation, this would make an API call
      // For demo purposes, we'll simulate a successful registration
      const { fullName, email, password, userType, ...additionalData } = userData;
      
      // Create user object
      const newUser = {
        id: Math.random().toString(36).substr(2, 9), // Generate a random ID
        fullName,
        email,
        userType,
        createdAt: new Date().toISOString(),
        ...additionalData
      };

      // Store user data in localStorage
      localStorage.setItem('agrimarket_user', JSON.stringify(newUser));
      setCurrentUser(newUser);
      return newUser;
    } catch (err) {
      setError(err.message || 'Registration failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('agrimarket_user');
    setCurrentUser(null);
  };

  // Update user profile
  const updateProfile = async (userData) => {
    setLoading(true);
    setError(null);

    try {
      // In a real implementation, this would make an API call
      // For demo purposes, we'll update the local storage directly
      const updatedUser = { ...currentUser, ...userData };
      localStorage.setItem('agrimarket_user', JSON.stringify(updatedUser));
      setCurrentUser(updatedUser);
      return updatedUser;
    } catch (err) {
      setError(err.message || 'Profile update failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Context value
  const value = {
    currentUser,
    loading,
    error,
    login,
    register,
    logout,
    updateProfile
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};