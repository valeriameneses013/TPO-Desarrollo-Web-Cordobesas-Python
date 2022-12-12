from app import db,ma
# defino la tabla--------
class Usuario(db.Model):   # la clase Producto hereda de db.Model     
    id=db.Column(db.Integer, primary_key=True)   #define los campos de la tabla
    nombre=db.Column(db.String(100))
    apellido=db.Column(db.String(100))
    edad=db.Column(db.Integer)
    fecNac=db.Column(db.Date)
    mail=db.Column(db.String(100))
    celular=db.Column(db.String(10))
    clave=db.Column(db.String(8))
    
    def __init__(self,nombre,apellido,edad,fecNac,mail,celular,clave):   #crea el  constructor de la clase
        self.nombre=nombre   # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.apellido=apellido
        self.edad=edad
        self.fecNac=fecNac
        self.mail=mail
        self.celular=celular
        self.clave=clave



#**************************************************************
class UsuarioSchema(ma.Schema):
    class Meta:
        fields=('id','nombre','apellido','edad','fecNac','mail','celular','clave')
usuario_schema=UsuarioSchema()            # para crear un producto
usuarios_schema=UsuarioSchema(many=True)  # multiples registros


#***************************************************************    
