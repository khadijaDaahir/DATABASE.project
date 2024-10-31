CREATE DATABASE FoodFairyDB;

USE FoodFairyDB;

CREATE TABLE FoodDonors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    contact_info VARCHAR(255),
    address VARCHAR(255),
    donation_date DATE
);
INSERT INTO FoodDonors (name, contact_info, address, donation_date)
VALUES 
    ('Ali Hamid', '0729087535', 'Nairobi West', '2024-10-23'),
    ('Samuel Kamau', '0776543210', 'Muhoho  Ave', '2024-10-15'),
    ('Larry Musyoka', '0789053215', 'Langata south', '2024-10-17'),
    ('Hafsa Ahmed', '0765432189', 'Parklands', '2024-10-19'),
    ('Fatma Zahra', '0745094327', 'Nakuru', '2024-10-22'),
    ('Mercy Mbithe', '0765439075', 'Eastlight', '2024-10-24'),
    ('lilian Njeri', '0745097832', 'naivasha', '2024-11-01'),
    ('Khalulu Kindamu', '0723797654', 'Karen', '2024-11-03');




CREATE TABLE Beneficiaries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    contact_info VARCHAR(255),
    address VARCHAR(255),
    household_size INT
);

INSERT INTO Beneficiaries (name, contact_info, address, household_size)
VALUES 
    ('Sambac Suhan', '0769076453', 'fairways est', 6),
    ('Below Jamalo', '07128765490', 'fanda holo street', 7),
    ('Siman Kowal', '0745098712', 'tom mboya strt', 6),
    ('Alice Ndiwa', '0724600865', 'galgolo hs', 5),
    ('Fardosa Farah', '0725098765', 'langata East', 3),
    ('Geofry Nani', '0725098765', 'sungura road', 4),
    ('Hudeifa Abdi', '07974645790', 'Jam str', 4),
    ('Sahara Mohamed', '0743267809', 'south badel', 2),
    ('Lauren Ndima', '0745309809', 'peponi ', 6),
    ('Ian Mbogwa', '07260975342', 'rafiki est', 3),
    ('Batulo Salah', '444-555-6666', 'Jeiso rd', 5),
    ('Ughin Waru', '0790569423', 'tandur rd', 2);



CREATE TABLE DistributionCenters (
    id INT AUTO_INCREMENT PRIMARY KEY,
    center_name VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    contact_person VARCHAR(255),
    capacity INT
);


INSERT INTO DistributionCenters (center_name, location, contact_person, capacity)
VALUES 
    ('Fallwall Distribution', 'langata ', 'Filsan Sinda', 500),
    ('Central Distribution', 'West City', 'Paul Nyaunyo', 600),
    ('Hall Distribution', 'Madaraka Ground', 'James Kawele', 400),
    ('Westside Distribution', 'City hall', 'Abdi Dini', 200);






CREATE TABLE FoodTypes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    food_name VARCHAR(255) NOT NULL,
    shelf_life INT,
    category VARCHAR(50)
);



INSERT INTO FoodTypes (food_name, shelf_life, category)
VALUES 
    ('Rice', 365, 'Grain'),
    ('Baked Beans', 730, 'Canned Goods'),
    ('Mangoes', 30, 'Fruit'),
    ('Oil', 250, 'Liquids'),
    ('Maize', 365, 'Grain'),
    ('Dates', 300, 'Fruit'),
    ('Milk', 10, 'dairy'),
    ('Tuna', 730, 'Canned Goods'),
    ('Carrot', 30, ' Vegetables');





CREATE TABLE DeliveryRecords (
    id INT AUTO_INCREMENT PRIMARY KEY,
    beneficiary_id INT,
    food_type_id INT,
    distribution_center_id INT,
    delivery_date DATE,
    quantity INT,
    FOREIGN KEY (beneficiary_id) REFERENCES Beneficiaries(id),
    FOREIGN KEY (food_type_id) REFERENCES FoodTypes(id),
    FOREIGN KEY (distribution_center_id) REFERENCES DistributionCenters(id)
);

INSERT INTO DeliveryRecords (beneficiary_id, food_type_id, distribution_center_id, delivery_date, quantity)
VALUES 
    (1, 2, 1, '2024-10-18', 15),
    (3, 1, 2, '2024-10-19', 20),
    (2, 4, 3, '2024-10-20', 10),
    (3, 5, 1, '2024-10-21', 25),
    (1, 3, 2, '2024-10-22', 31),
    (2, 3, 1, '2024-10-23', 35),
    (3, 2, 3, '2024-10-24', 20);


SELECT * FROM FoodDonors;
SELECT * FROM Beneficiaries;
SELECT * FROM DistributionCenters;
SELECT * FROM FoodTypes;
SELECT * FROM DeliveryRecords;


SHOW DATABASES;

CREATE DATABASE FarmMarketTrackerDB;
USE FarmMarketTrackerDB;

CREATE TABLE CropTypes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    crop_name VARCHAR(255) NOT NULL,
    description TEXT
);


INSERT INTO CropTypes (crop_name, description)
VALUES 
    ('Corn', 'A widely grown grain crop used for food and animal feed'),
    ('Rice', 'A staple food crop in many regions'),
    ('Carrot', 'A root vegetable known for its sweetness'),
    ('Grapes', 'Fruit used for wine, juice, and consumption'),
    ('Potato', 'A versatile tuber widely used in cooking');




CREATE TABLE Yields (
    id INT AUTO_INCREMENT PRIMARY KEY,
    crop_id INT,
    harvest_count INT,
    average_yield_per_harvest DECIMAL(10, 2),
    year INT,
    FOREIGN KEY (crop_id) REFERENCES CropTypes(id)
);



CREATE TABLE MarketPrices (
    id INT AUTO_INCREMENT PRIMARY KEY,
    crop_id INT,
    market_name VARCHAR(255),
    price_per_unit DECIMAL(10, 2),
    date DATE,
    FOREIGN KEY (crop_id) REFERENCES CropTypes(id)
);

INSERT INTO MarketPrices (crop_id, market_name, price_per_unit, date)
VALUES 
    (1, 'City Market', 2.50, '2024-10-10'),
    (2, 'Farmers Market', 1.75, '2024-10-10'),
    (3, 'Fruit Market', 3.00, '2024-10-10');




CREATE TABLE BestMarkets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    crop_id INT,
    market_name VARCHAR(255),
    reason TEXT,
    FOREIGN KEY (crop_id) REFERENCES CropTypes(id)
);



INSERT INTO BestMarkets (crop_id, market_name, reason)
VALUES 
    (1, 'City Market', 'High demand for wheat'),
    (2, 'Farmers Market', 'Good price and demand for tomatoes'),
    (3, 'Fruit Market', 'Popular market for apples');

 yields for crops
INSERT INTO Yields (crop_id, harvest_count, average_yield_per_harvest, year)
VALUES 
    (1, 2, 5000.00, 2024),
    (2, 3, 2000.50, 2024),
    (3, 1, 1000.75, 2024);



SELECT * FROM CropTypes;
SHOW CREATE TABLE Yields;
SHOW TABLES;
SELECT * FROM CropTypes;
SELECT * FROM Yields;
SELECT * FROM MarketPrices;
SELECT * FROM BestMarkets;
