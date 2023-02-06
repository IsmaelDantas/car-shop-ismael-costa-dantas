# Welcome to the repository of the project <b>Car Shop</b>!

This project was mode in the Back End development module in Trybe

Here you will find the details of this awesome project

---

# Skills

In this project, i was able of:

- Use the non-relational MongoDB database;
- Use the Mongoose ODM to work with the MongoDB database;
- Exercise the use of OOP;
- Build a CRUD API using the principles of good development with SOLID;
- Construction of unit tests using **Mocha**, **Chai**, and **Sinon**.
   


# MongoDB

```MongoDB``` is a free, open-source, cross-platform document-oriented database software. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas.
For more details, see the official MongoDB documentation [here](https://www.mongodb.com/).

# ODM
**O**bject **D**ocument **M**apping (ODM) are tools that deal with structured data in non-relational databases (such as MongoDB). In this project, we use Mongoose.

# CRUD
The Object-Oriented Programming (OOP) paradigm is a model for analysis, design, and programming based on the approximation between the real world and the virtual world, through the creation and interaction of objects, attributes, code, methods, among others.

# OOP
The **O**bject-**O**riented **P**rogramming (OOP) paradigm is a model for analysis, design, and programming based on the approximation between the real world and the virtual world, through the creation and interaction of objects, attributes, code, methods, among others.

# SOLID
SOLID is an accelerator that makes the code more cohesive and easier to maintain, extend, adapt, and adjust as scope changes. It also makes the code testable and easy to understand, extensible, and provides maximum reuse. The SOLID term is an acronym that represents five ideas originated by the famous Robert Cecil Martin, and they mean:
- Single Responsability Principle;
- Open/Closed Principle;
- Liskov Substitution Principle;
- Interface Segregation Principle;
- Dependency Inversion Principle;
For more details, I suggest you consult this <a href="https://en.wikipedia.org/wiki/SOLID" target="_blank">link</a>.

# Application Functioning
To start the project, you need to have [Docker](https://docs.docker.com/engine/install/ubuntu/) installed.
After cloning the project to your computer, to start it you need to run the command
```
docker-compose up -d && docker exec -it car_shop bash
```
and then execute these commands, one by one
```
npm install
npm run dev
```
This project is the final individual Backend project of the Trybe and the penultimate of the module. The project consolidates much of what was learned since the beginning of the module, such as the use of Docker, code architecture following the MSC model and the creation of RESTful APIs with full CRUD.

In this project, we delved further into the use of SOLID for good writing and maintainability of the code, as well as the use of OOP and TypeScript to ensure more robustness to the project. As challenges, we had to create a CRUD API  of a car dealership, where you can read, create, edit, and delete vehicles (cars and motorcycles) from the dealership's database.

This project uses the non-relational database MongoDB, and to manipulate it we use the ODM Mongoose.
Tests with 100% coverage of the project have also been developed using the tools Mocha, Chai, and Sinon. To run the project's tests, it is necessary to run the command
```
npm run test:coverage
```
within the root folder of the project, outside of the Docker terminal*. After running the command, all tests created by me will be displayed to obtain 100% coverage of the project.
\*  If you accessed the Docker terminal following the previous commands, you can type "exit" without quotes and press Enter. You will exit the Docker terminal. If your terminal is stuck (unable to type), you can press Ctrl + C and then type the "exit" to exit the Docker terminal.


