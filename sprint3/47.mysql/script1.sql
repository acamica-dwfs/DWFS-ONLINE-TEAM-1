

-- crear la base de datos
create database acamica_team

-- selecionamos la base de datos
use acamica_team

-- creacion de una tabla
create table estudiantes (
    id_estudiantes int primary key  auto_increment,
    apellido varchar(256),
    nombre varchar(256),
    cedula int unique,
    estado bool default true
)
-- inserciones
insert into estudiantes(apellidos, nombre, cedula, estado)
                       values('zapata', 'yulian', 111, true)

 insert into estudiantes(apellidos, nombre, cedula, estado)
                       values('zapata', 'andres', 1111, true)

  --  transacciones  en mysql  :  begin , commit , rollback
 insert into estudiantes(apellidos, nombre, cedula, estado) -- bulk
                   values('davial', 'airan', 1112, true),
                   ('marin', 'pedro', 1113, true)

--- seleccion de datos  / busquedas

select *
from estudiantes

select  apellidos, nombre
from estudiantes


select  apellidos as last_name, nombre name
from estudiantes

select *
FROM  estudiantes
where cedula  = 222

select *
FROM  estudiantes
where  nombre = 'pedro'

select *
FROM  estudiantes
where  nombre = 'yulian' and estado = true

select count(*)
from estudiantes

select *
FROM  estudiantes
where  nombre like '%a%'
