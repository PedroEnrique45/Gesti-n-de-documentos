use media;
db.media.insertMany([
    { 
        "tipo": "libro",
        "titulo": "Java para todos",
        "ISBN": "987-1-2344-5334-8",
        "editorial": "Anaya",
        "Autor": ["Pepe Caballero", "Isabel Sanz", "Timoteo Marino"],
        "capítulos": [
            {"capitulo": 1, "titulo": "Primeros pasos en Java", "longitud": 20},
            {"capitulo": 2, "titulo": "Primeros pasos en Java", "longitud": 25}
        ]
    },
    { 
        "tipo": "CD",
        "Artista": "Los piratas",
        "Titulo": "Recuerdos",
        "canciones": [
            {"cancion": 1, "titulo": "Adiós mi barco", "longitud": "3:20"},
            {"cancion": 2, "titulo": "Pajaritos", "longitud": "4:15"}
        ]
    },
    { 
        "tipo": "DVD",
        "Titulo": "Matrix",
        "estreno": 1999,
        "actores": [
            "Keanu Reeves", "Carry-Anne Moss", "Laurence Fishburne", 
            "Hugo Weaving", "Gloria Foster", "Joe Pantoliano"
        ]
    }
]);
db.media.updateOne(
    { "Titulo": "Matrix" },
    { $set: { "genero": "acción" } }
);
db.media.insertOne({
    "tipo": "Libro",
    "Titulo": "Constantinopla",
    "capitulos": 12,
    "leidos": 3
});

db.media.updateOne(
    { "Titulo": "Constantinopla" },
    { $inc: { "leidos": 5 } }
);
db.media.updateOne(
    { "Titulo": "Matrix" },
    { $set: { "genero": "ciencia ficción" } }
);
db.media.updateOne(
    { "titulo": "Java para todos" },
    { $unset: { "editorial": "" } }
);
