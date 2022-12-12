from app import db,ma
# defino la tabla--------
class Materia(db.Model):   # la clase Materia hereda de db.Model     
    id=db.Column(db.Integer, primary_key=True)   #define los campos de la tabla
    nombre=db.Column(db.String(100))
    dias=db.Column(db.String(100))
    horario=db.Column(db.Integer)
    modalidad=db.Column(db.String(100))
    costo=db.Column(db.Integer)
    duracion=db.Column(db.Integer)
       
    def __init__(self,nombre,dias,horario,modalidad,costo,duracion):   #crea el  constructor de la clase
        self.nombre=nombre   # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.dias=dias
        self.horario=horario
        self.modalidad=modalidad
        self.costo=costo
        self.duracion=duracion
        

#************************************************************
class MateriaSchema(ma.Schema):
    class Meta:
        fields=('id','nombre','dias','horario','modalidad','costo','duracion')
materia_schema=MateriaSchema()            # para crear un producto
materias_schema=MateriaSchema(many=True)  # multiples registros

