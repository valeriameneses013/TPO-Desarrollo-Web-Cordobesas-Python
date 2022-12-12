from app import *
from modelos.materia_modelo import *


# crea los endpoint o rutas (json)
@app.route('/materias',methods=['GET'])
def get_Materias():
    all_materias=Materia.query.all()     # query.all() lo hereda de db.Model
    result=materias_schema.dump(all_materias)  # .dump() lo hereda de ma.schema
    return jsonify(result)
 
@app.route('/materias/<id>',methods=['GET'])
def get_materia(id):
    materia=Materias.query.get(id)
    return materia_schema.jsonify(materia)

@app.route('/materias/<id>',methods=['DELETE'])
def delete_materia(id):
    materia=Materia.query.get(id)
    db.session.delete(materia)
    db.session.commit()
    return materia_schema.jsonify(materia)

@app.route('/materias', methods=['POST']) # crea ruta o endpoint
def create_materia():
    print(request.json)  # request.json contiene el json que envio el cliente
    nombre=request.json['nombre']
    dias=request.json['dias']
    horario=request.json['horario']
    modalidad=request.json['modalidad']
    costo=request.json['costo']
    duracion=request.json['duracion']

    new_materia=Materia(nombre,dias,horario,modalidad,costo,duracion)
    db.session.add(new_materia)
    db.session.commit()
    return materia_schema.jsonify(new_materia)    

@app.route('/materias/<id>' ,methods=['PUT'])
def update_materia(id):
    materia=Materia.query.get(id)
   
    nombre=request.json['nombre']
    dias=request.json['dias']
    horario=request.json['horario']
    modalidad=request.json['modalidad']
    costo=request.json['costo']
    duracion=request.json['duracion']

    materia.nombre=nombre
    materia.dias=dias
    materia.horario=horario
    materia.modalidad=modalidad
    materia.costo=costo
    materia.duracion=duracion

    db.session.commit()
    return materia_schema.jsonify(materia)    