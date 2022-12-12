from app import *
from modelos.usuario_modelo import *


# crea los endpoint o rutas (json)
@app.route('/usuarios',methods=['GET'])
def get_Usuarios():
    all_usuarios=Usuario.query.all()     # query.all() lo hereda de db.Model
    result=usuarios_schema.dump(all_usuarios)  # .dump() lo hereda de ma.schema
    return jsonify(result)
 
@app.route('/usuarios/<id>',methods=['GET'])
def get_usuario(id):
    usuario=Usuario.query.get(id)
    return usuario_schema.jsonify(usuario)

@app.route('/usuarios/<id>',methods=['DELETE'])
def delete_usuario(id):
    usuario=Usuario.query.get(id)
    db.session.delete(usuario)
    db.session.commit()
    return usuario_schema.jsonify(usuario)

@app.route('/usuarios', methods=['POST']) # crea ruta o endpoint
def create_usuario():
    print(request.json)  # request.json contiene el json que envio el cliente
    nombre=request.json['nombre']
    apellido=request.json['apellido']
    edad=request.json['edad']
    fecNac=request.json['fecNac']
    mail=request.json['mail']
    celular=request.json['celular']
    clave=request.json['clave']

    new_usuario=Usuario(nombre,apellido,edad,fecNac,mail,celular,clave)
    db.session.add(new_usuario)
    db.session.commit()
    return usuario_schema.jsonify(new_usuario)    

@app.route('/usuarios/<id>' ,methods=['PUT'])
def update_usuario(id):
    usuario=Usuario.query.get(id)
   
    nombre=request.json['nombre']
    apellido=request.json['apellido']
    edad=request.json['edad']
    fecNac=request.json['fecNac']
    mail=request.json['mail']
    celular=request.json['celular']
    clave=request.json['clave']

    usuario.nombre=nombre
    usuario.apellido=apellido
    usuario.edad=edad
    usuario.fecNac=fecNac
    usuario.mail=mail
    usuario.celular=celular
    usuario.clave=clave
    
    db.session.commit()
    return usuario_schema.jsonify(usuario)    