PGDMP         (                z            CRUD_MVC    15.1    15.1 &    -           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            .           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            /           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            0           1262    16398    CRUD_MVC    DATABASE     }   CREATE DATABASE "CRUD_MVC" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE "CRUD_MVC";
                postgres    false            1           0    0    DATABASE "CRUD_MVC"    COMMENT     ?   COMMENT ON DATABASE "CRUD_MVC" IS 'Base de datos para la Actividad Docente #2 de la asignatura Desarrollo de Aplicaciones Web. Creada por Renny Galárraga, estudiante de sexto semestre de la carrera Ingeniería en Tecnologías de Información.';
                   postgres    false    3376            O           1247    16541    enum_Personal_genero    TYPE     c   CREATE TYPE public."enum_Personal_genero" AS ENUM (
    'Masculino',
    'Femenino',
    'Otro'
);
 )   DROP TYPE public."enum_Personal_genero";
       public          postgres    false            L           1247    16483    enum_Personals_genero    TYPE     d   CREATE TYPE public."enum_Personals_genero" AS ENUM (
    'Masculino',
    'Femenino',
    'Otro'
);
 *   DROP TYPE public."enum_Personals_genero";
       public          postgres    false            U           1247    24588    genero    TYPE     S   CREATE TYPE public.genero AS ENUM (
    'Masculino',
    'Femenino',
    'Otro'
);
    DROP TYPE public.genero;
       public          postgres    false            ?            1259    24620    Mensajes    TABLE     O  CREATE TABLE public."Mensajes" (
    id integer NOT NULL,
    correo_rem character varying(30),
    remitente character varying(30),
    telefono character varying(15),
    asunto character varying(30),
    mensaje text,
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now()
);
    DROP TABLE public."Mensajes";
       public         heap    postgres    false            ?            1259    24619    Mensajes_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Mensajes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Mensajes_id_seq";
       public          postgres    false    221            2           0    0    Mensajes_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Mensajes_id_seq" OWNED BY public."Mensajes".id;
          public          postgres    false    220            ?            1259    24577    Organizacion    TABLE     ,  CREATE TABLE public."Organizacion" (
    id integer NOT NULL,
    nombre character varying(30),
    foto bytea,
    descripcion text,
    mision text,
    vision text,
    valores text,
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now()
);
 "   DROP TABLE public."Organizacion";
       public         heap    postgres    false            ?            1259    24576    Organizacion_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Organizacion_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."Organizacion_id_seq";
       public          postgres    false    215            3           0    0    Organizacion_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."Organizacion_id_seq" OWNED BY public."Organizacion".id;
          public          postgres    false    214            ?            1259    24596    Personal    TABLE     ?  CREATE TABLE public."Personal" (
    id integer NOT NULL,
    cedula character varying(15),
    nombre character varying(30),
    apellido character varying(30),
    "cumpleaños" date,
    genero public.genero,
    telefono character varying(15),
    rol character varying(30),
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now()
);
    DROP TABLE public."Personal";
       public         heap    postgres    false    853            ?            1259    24595    Personal_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Personal_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Personal_id_seq";
       public          postgres    false    217            4           0    0    Personal_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Personal_id_seq" OWNED BY public."Personal".id;
          public          postgres    false    216            ?            1259    24607 	   Productos    TABLE       CREATE TABLE public."Productos" (
    id integer NOT NULL,
    nombre character varying(30),
    codigo character varying(15),
    descripcion text,
    foto bytea,
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now()
);
    DROP TABLE public."Productos";
       public         heap    postgres    false            ?            1259    24606    Productos_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Productos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."Productos_id_seq";
       public          postgres    false    219            5           0    0    Productos_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Productos_id_seq" OWNED BY public."Productos".id;
          public          postgres    false    218            ?           2604    24623    Mensajes id    DEFAULT     n   ALTER TABLE ONLY public."Mensajes" ALTER COLUMN id SET DEFAULT nextval('public."Mensajes_id_seq"'::regclass);
 <   ALTER TABLE public."Mensajes" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    221    221            }           2604    24580    Organizacion id    DEFAULT     v   ALTER TABLE ONLY public."Organizacion" ALTER COLUMN id SET DEFAULT nextval('public."Organizacion_id_seq"'::regclass);
 @   ALTER TABLE public."Organizacion" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215            ?           2604    24599    Personal id    DEFAULT     n   ALTER TABLE ONLY public."Personal" ALTER COLUMN id SET DEFAULT nextval('public."Personal_id_seq"'::regclass);
 <   ALTER TABLE public."Personal" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    217    217            ?           2604    24610    Productos id    DEFAULT     p   ALTER TABLE ONLY public."Productos" ALTER COLUMN id SET DEFAULT nextval('public."Productos_id_seq"'::regclass);
 =   ALTER TABLE public."Productos" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    219    219            *          0    24620    Mensajes 
   TABLE DATA           t   COPY public."Mensajes" (id, correo_rem, remitente, telefono, asunto, mensaje, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    221   t,       $          0    24577    Organizacion 
   TABLE DATA           z   COPY public."Organizacion" (id, nombre, foto, descripcion, mision, vision, valores, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    215   ?,       &          0    24596    Personal 
   TABLE DATA           ?   COPY public."Personal" (id, cedula, nombre, apellido, "cumpleaños", genero, telefono, rol, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    217   ?,       (          0    24607 	   Productos 
   TABLE DATA           f   COPY public."Productos" (id, nombre, codigo, descripcion, foto, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    219   ?,       6           0    0    Mensajes_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Mensajes_id_seq"', 1, false);
          public          postgres    false    220            7           0    0    Organizacion_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."Organizacion_id_seq"', 1, false);
          public          postgres    false    214            8           0    0    Personal_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Personal_id_seq"', 1, false);
          public          postgres    false    216            9           0    0    Productos_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."Productos_id_seq"', 1, false);
          public          postgres    false    218            ?           2606    24629    Mensajes Mensajes_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Mensajes"
    ADD CONSTRAINT "Mensajes_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Mensajes" DROP CONSTRAINT "Mensajes_pkey";
       public            postgres    false    221            ?           2606    24586    Organizacion Organizacion_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."Organizacion"
    ADD CONSTRAINT "Organizacion_pkey" PRIMARY KEY (id);
 L   ALTER TABLE ONLY public."Organizacion" DROP CONSTRAINT "Organizacion_pkey";
       public            postgres    false    215            ?           2606    24605    Personal Personal_cedula_key 
   CONSTRAINT     ]   ALTER TABLE ONLY public."Personal"
    ADD CONSTRAINT "Personal_cedula_key" UNIQUE (cedula);
 J   ALTER TABLE ONLY public."Personal" DROP CONSTRAINT "Personal_cedula_key";
       public            postgres    false    217            ?           2606    24603    Personal Personal_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Personal"
    ADD CONSTRAINT "Personal_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Personal" DROP CONSTRAINT "Personal_pkey";
       public            postgres    false    217            ?           2606    24618    Productos Productos_codigo_key 
   CONSTRAINT     _   ALTER TABLE ONLY public."Productos"
    ADD CONSTRAINT "Productos_codigo_key" UNIQUE (codigo);
 L   ALTER TABLE ONLY public."Productos" DROP CONSTRAINT "Productos_codigo_key";
       public            postgres    false    219            ?           2606    24616    Productos Productos_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."Productos"
    ADD CONSTRAINT "Productos_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."Productos" DROP CONSTRAINT "Productos_pkey";
       public            postgres    false    219            *      x?????? ? ?      $      x?????? ? ?      &      x?????? ? ?      (      x?????? ? ?     