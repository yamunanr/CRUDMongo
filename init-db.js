document.body.style.backgroundColor = "yellow";
db = db.getSiblingDB("animal_db");
db.animal_tb.drop();

db.animal_tb.insertMany([
    {
        "id": 1,
        "name": "Lion",
        "type": "wild"
    },
    {
        "id": 2,
        "name": "Cow",
        "type": "domestic"
    },
    {
        "id": 3,
        "name": "Tiger",
        "type": "wild"
    },
    {
        "id": 4,
        "name": "pig",
        "type": "domestic"
    },
    {
        "id": 5,
        "name": "monkey",
        "type": "medical"
    },
    {
        "id": 6,
        "name": "rhino",
        "type": "wild"
    },
    {
        "id": 7,
        "name": "elephant",
        "type": "wild"
    },
    {
        "id": 8,
        "name": "rat",
        "type": "medical"
    },
    {
        "id": 9,
        "name": "dog",
        "type": "medical"
    }

]);
