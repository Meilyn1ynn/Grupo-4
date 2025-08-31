-- =======================================
-- CREACIÓN DE BASE DE DATOS
-- =======================================
CREATE DATABASE AlquilaYa;
GO
USE AlquilaYa;
GO

-- =======================================
-- 1. USUARIOS
-- =======================================
CREATE TABLE Usuarios (
    US_id INT IDENTITY(1,1) PRIMARY KEY,
    US_nombre NVARCHAR(100) NOT NULL,
    US_apellido NVARCHAR(100) NOT NULL,
    US_email NVARCHAR(150) NOT NULL UNIQUE,
    US_telefono NVARCHAR(20),
    US_password_hash NVARCHAR(255) NOT NULL,
    US_fecha_registro DATETIME DEFAULT GETDATE()
);

-- =======================================
-- 2. PROPIETARIOS
-- =======================================
CREATE TABLE Propietarios (
    PRO_id INT PRIMARY KEY,
    PRO_dni NVARCHAR(20),
    PRO_direccion_contacto NVARCHAR(200),
    CONSTRAINT FK_Propietario_Usuario FOREIGN KEY (PRO_id) REFERENCES Usuarios(US_id)
);

-- =======================================
-- 3. INQUILINOS
-- =======================================
CREATE TABLE Inquilinos (
    IN_id INT PRIMARY KEY,
    IN_dni NVARCHAR(20),
    IN_preferencias NVARCHAR(500),
    CONSTRAINT FK_Inquilino_Usuario FOREIGN KEY (IN_id) REFERENCES Usuarios(US_id)
);

-- =======================================
-- 4. ESTADO PROPIEDAD
-- =======================================
CREATE TABLE EstadoPropiedad (
    EP_id INT IDENTITY(1,1) PRIMARY KEY,
    EP_descripcion NVARCHAR(50) NOT NULL
);

-- =======================================
-- 5. PROPIEDADES
-- =======================================
CREATE TABLE Propiedades (
    PO_id INT IDENTITY(1,1) PRIMARY KEY,
    PO_titulo NVARCHAR(200) NOT NULL,
    PO_descripcion NVARCHAR(MAX),
    PO_direccion NVARCHAR(200),
    PO_ciudad NVARCHAR(100),
    PO_latitud DECIMAL(9,6),
    PO_longitud DECIMAL(9,6),
    PO_precio_mensual DECIMAL(12,2) NOT NULL,
    PO_habitaciones INT,
    PO_banos INT,
    PO_metros_cuadrados DECIMAL(10,2),
    PRO_id INT NOT NULL,
    EP_id INT NOT NULL,
    CONSTRAINT FK_Propiedad_Propietario FOREIGN KEY (PRO_id) REFERENCES Propietarios(PRO_id),
    CONSTRAINT FK_Propiedad_Estado FOREIGN KEY (EP_id) REFERENCES EstadoPropiedad(EP_id)
);

-- =======================================
-- 6. CARACTERISTICAS
-- =======================================
CREATE TABLE Caracteristicas (
    CA_id INT IDENTITY(1,1) PRIMARY KEY,
    CA_nombre NVARCHAR(100) NOT NULL
);

-- =======================================
-- 7. PROPIEDADCARACTERISTICA (N:M)
-- =======================================
CREATE TABLE PropiedadCaracteristica (
    PO_id INT NOT NULL,
    CA_id INT NOT NULL,
    PRIMARY KEY (PO_id, CA_id),
    CONSTRAINT FK_PC_Propiedad FOREIGN KEY (PO_id) REFERENCES Propiedades(PO_id),
    CONSTRAINT FK_PC_Caracteristica FOREIGN KEY (CA_id) REFERENCES Caracteristicas(CA_id)
);

-- =======================================
-- 8. FOTOS PROPIEDAD
-- =======================================
CREATE TABLE FotosPropiedad (
    FP_id INT IDENTITY(1,1) PRIMARY KEY,
    PO_id INT NOT NULL,
    FP_url NVARCHAR(255) NOT NULL,
    CONSTRAINT FK_Foto_Propiedad FOREIGN KEY (PO_id) REFERENCES Propiedades(PO_id)
);

-- =======================================
-- 9. ESTADO CONTRATO
-- =======================================
CREATE TABLE EstadoContrato (
    EC_id INT IDENTITY(1,1) PRIMARY KEY,
    EC_descripcion NVARCHAR(50) NOT NULL
);

-- =======================================
-- 10. CONTRATOS
-- =======================================
CREATE TABLE Contratos (
    CON_id INT IDENTITY(1,1) PRIMARY KEY,
    PO_id INT NOT NULL,
    IN_id INT NOT NULL,
    CON_fecha_inicio DATE NOT NULL,
    CON_fecha_fin DATE,
    CON_monto_mensual DECIMAL(12,2) NOT NULL,
    EC_id INT NOT NULL,
    CONSTRAINT FK_Contrato_Propiedad FOREIGN KEY (PO_id) REFERENCES Propiedades(PO_id),
    CONSTRAINT FK_Contrato_Inquilino FOREIGN KEY (IN_id) REFERENCES Inquilinos(IN_id),
    CONSTRAINT FK_Contrato_Estado FOREIGN KEY (EC_id) REFERENCES EstadoContrato(EC_id)
);

-- =======================================
-- 11. ESTADO PAGO
-- =======================================
CREATE TABLE EstadoPago (
    ESP_id INT IDENTITY(1,1) PRIMARY KEY,
    ESP_descripcion NVARCHAR(50) NOT NULL
);

-- =======================================
-- 12. METODO PAGO
-- =======================================
CREATE TABLE MetodoPago (
    MP_id INT IDENTITY(1,1) PRIMARY KEY,
    MP_nombre NVARCHAR(50) NOT NULL
);

-- =======================================
-- 13. PAGOS
-- =======================================
CREATE TABLE Pagos (
    PG_id INT IDENTITY(1,1) PRIMARY KEY,
    CON_id INT NOT NULL,
    PG_fecha_pago DATE NOT NULL,
    PG_monto DECIMAL(12,2) NOT NULL,
    MP_id INT NOT NULL,
    ESP_id INT NOT NULL,
    CONSTRAINT FK_Pago_Contrato FOREIGN KEY (CON_id) REFERENCES Contratos(CON_id),
    CONSTRAINT FK_Pago_Metodo FOREIGN KEY (MP_id) REFERENCES MetodoPago(MP_id),
    CONSTRAINT FK_Pago_Estado FOREIGN KEY (ESP_id) REFERENCES EstadoPago(ESP_id)
);

-- =======================================
-- 14. RESEÑAS
-- =======================================
CREATE TABLE Reseñas (
    RS_id INT IDENTITY(1,1) PRIMARY KEY,
    PO_id INT NOT NULL,
    IN_id INT NOT NULL,
    RS_comentario NVARCHAR(MAX),
    RS_calificacion INT CHECK (RS_calificacion BETWEEN 1 AND 5),
    RS_fecha DATE DEFAULT GETDATE(),
    CONSTRAINT FK_Reseña_Propiedad FOREIGN KEY (PO_id) REFERENCES Propiedades(PO_id),
    CONSTRAINT FK_Reseña_Inquilino FOREIGN KEY (IN_id) REFERENCES Inquilinos(IN_id)
);

-- =======================================
-- 15. MENSAJES (Chat)
-- =======================================
CREATE TABLE Mensajes (
    MS_id INT IDENTITY(1,1) PRIMARY KEY,
    MS_emisor_id INT NOT NULL,
    MS_receptor_id INT NOT NULL,
    PO_id INT NOT NULL,
    MS_contenido NVARCHAR(MAX) NOT NULL,
    MS_fecha_envio DATETIME DEFAULT GETDATE(),
    CONSTRAINT FK_Mensaje_Emisor FOREIGN KEY (MS_emisor_id) REFERENCES Usuarios(US_id),
    CONSTRAINT FK_Mensaje_Receptor FOREIGN KEY (MS_receptor_id) REFERENCES Usuarios(US_id),
    CONSTRAINT FK_Mensaje_Propiedad FOREIGN KEY (PO_id) REFERENCES Propiedades(PO_id)
);
