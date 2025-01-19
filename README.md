Food Ordering Website with Chatbot
This project is a food ordering website where users can browse available food items, add them to a shopping cart, and place orders. The website includes a chatbot that assists users with the following tasks:

Placing new orders.
Tracking existing orders.
Adding more items to the current order.
The chatbot is built using Dialogflow and natural language processing (NLP) for better interaction and user experience.

Features
Food Ordering: Users can browse available food items and add them to a cart. The total price is automatically calculated.
Order Tracking: The chatbot allows users to track their orders using a unique order ID.
Order Modification: Users can add additional items to their current order via the chatbot. Entities Used
Food Item: Represents the food available for ordering.
Order ID: Unique identifier for each user’s order.
Order Status: Tracks the progress of the order (e.g., Pending, Delivered).
Improvements Needed
Order Tracking: The chatbot needs more training for better handling of order tracking and recognizing user-specific order IDs.
Backend Integration: Enhance the backend API to support real-time order tracking, adding items, and user profile integration.Backend Overview
Database: Stores user details, orders, items, and order statuses.
API: A set of endpoints for the chatbot to interact with the backend:
POST /order/new – Create a new order.
GET /order/{id} – Retrieve order details by order ID.
PUT /order/{id}/add-items – Add items to an existing order.chatbot functionality:In the chatbot we can start by saying hey or anything else. We have trained it so that it can pick up other greetings too. Then we can place an order a menu bar will show from where we can add food items. Then we can confirm it order will be placed
