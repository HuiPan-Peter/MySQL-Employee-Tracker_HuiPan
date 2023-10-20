INSERT INTO department (name)
VALUES 
('Production'), 
('Operations'), 
('Legal'), 
('Information Technology'), 
('Management'), 
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES 
('Engineer', 100000, 1), 
('Accountant', 90000, 2), 
('Lawyer', 90000, 3), 
('IT Specialist', 110000, 4), 
('Project Manager', 120000, 5), 
('Sales Representative', 60000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Smith', 1, 5),
('Matthew', 'Tingley', 2, 5),
('Roger', 'Waters', 3, 5),
('Toua', 'Thao', 4, 5),
('David', 'Gates', 5, NULL),
('Nicole', 'Thompson', 6, 9),
('Justin', 'Surette', 1, 9),
('Fernando', 'Ibarra', 2, 9),
('Sureer', 'Jimale', 5, NULL);