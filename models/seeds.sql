use jawsdb;

insert into cars (make, model, color, licensePlate, pricePerDay, createdAt, updatedAt) VALUES 
("Lamborghini", "Aventador", "Orange", "FEK-403", "999.00", current_date(), current_date()),
("McLaren", "720S", "Aqua", "KWE-348", "799.00", current_date(), current_date()),
("Aston Martin", "DBS Superleggera Volante", "Gunmetal", "WES-832", "799.00", current_date(), current_date()),
("Pagani", "Huayra", "Gunmetal", "EIG-977", "5599.00", current_date(), current_date()),
("Lamborghini", "Huracan EVO", "Orange", "WER-364", "799.00", current_date(), current_date()),
("Lamborghini", "Sesto Elemento", "Black", "ZDU-343", "3499.00", current_date(), current_date()),
("Porsche", "Taycan 4S", "Aqua", "EEE-432", "599.00", current_date(), current_date()),
("Koenigsegg", "Trevita", "Black", "GFD-322", "6599.00", current_date(), current_date()),
("Rolls-Royce", "Sweptail", "Blue", "DIU-121", "9999.00", current_date(), current_date()),
("Aston Martin", "Valkrie", "Blue", "VRE-322", "4299.00", current_date(), current_date()),
("Ferrari", "Pininfarina", "Red", "FDS-321", "3999.00", current_date(), current_date()),
("Lamborghini", "Urus", "Yellow", "PDF-446", "699.00", current_date(), current_date()),
("Mercedes Benz", "G63 AMG", "Black", "FHF-336", "599.00", current_date(), current_date()),
("Rolls-Royce", "Cullinan", "Black", "BJK-090", "999.00", current_date(), current_date()),
("Porsche", "Cayenne", "Blue", "BLV-556", "599.00", current_date(), current_date()),
("Maserati", "Levante", "Tan", "GBB-344", "499.00", current_date(), current_date()),
("Bentley", "Bentayga Mulliner", "Black", "BLV-628", "599.00", current_date(), current_date()),
("Aston Martin", "DBX", "Black", "BUI-387", "699.00", current_date(), current_date()),
("Exclusive", "Doc Brown's Delorean", "Silver", "OUTATIME", "2015.00", current_date(), current_date()),
("Exclusive", "The Mirthmobile", "Blue", "SHA-WING", "1976.00", current_date(), current_date()),
("Exclusive", "The Gigahorse", "Dirt", "RIDE", "199.00", current_date(), current_date()),
("Exclusive", "Batmans Tumbler", "Black", "BATMAN", "20000.00", current_date(), current_date()),
("Exclusive", "Wienermobile", "Orange", "WEENR", "1.99", current_date(), current_date());

insert into customers (firstName, lastName, email, phone, driversLicenseNo, driversLicenseState, createdAt, updatedAt) VALUES
("Justin", "Wells", "jwellstx@gmail.com", "8176571989", "1235234", "TX", current_date(), current_date());

insert into transactions (transactinDate, rentalDate, rentalStatus, pricePaid, createdAt, updateAt) VALUES
(current_date(), current_date(), 1, "100.00", current_date(), current_date());