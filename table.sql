

    create table users(
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(45),
        mobile VARCHAR(20),
        email VARCHAR(50),
        password VARCHAR(100),
        status VARCHAR(20),
        role VARCHAR(20),
        UNIQUE(email)
    )


    create table categories(
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(200) NOT NULL
        UNIQUE(email)
    )