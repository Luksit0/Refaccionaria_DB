-- CreateTable
CREATE TABLE "Vendedor" (
    "ven_id" SERIAL NOT NULL,
    "ven_primer_nombre" TEXT NOT NULL,
    "ven_segundo_nombre" TEXT,
    "ven_primer_apellido" TEXT NOT NULL,
    "ven_segundo_apellido" TEXT,
    "ven_password" TEXT NOT NULL,

    CONSTRAINT "Vendedor_pkey" PRIMARY KEY ("ven_id")
);

-- CreateTable
CREATE TABLE "Clientes" (
    "cli_id" SERIAL NOT NULL,
    "cli_primer_nombre" TEXT NOT NULL,
    "cli_segundo_nombre" TEXT,
    "cli_primer_apellido" TEXT NOT NULL,
    "cli_segundo_apellido" TEXT,
    "cli_rfc" TEXT,
    "cli_nombre_empresa" TEXT,

    CONSTRAINT "Clientes_pkey" PRIMARY KEY ("cli_id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "cat_id" SERIAL NOT NULL,
    "cat_tipo" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("cat_id")
);

-- CreateTable
CREATE TABLE "Productos" (
    "pro_id" SERIAL NOT NULL,
    "pro_nombre" TEXT NOT NULL,
    "pro_precio" DECIMAL(10,2) NOT NULL,
    "pro_costo" DECIMAL(10,2) NOT NULL,
    "pro_stock" INTEGER NOT NULL DEFAULT 0,
    "cat_id" INTEGER NOT NULL,

    CONSTRAINT "Productos_pkey" PRIMARY KEY ("pro_id")
);

-- CreateTable
CREATE TABLE "Proveedor" (
    "prov_id" SERIAL NOT NULL,
    "prov_nombre" TEXT NOT NULL,
    "cat_id" INTEGER NOT NULL,

    CONSTRAINT "Proveedor_pkey" PRIMARY KEY ("prov_id")
);

-- CreateTable
CREATE TABLE "Compras" (
    "com_id" SERIAL NOT NULL,
    "com_fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "com_monto" DECIMAL(10,2) NOT NULL,
    "com_iva" DECIMAL(10,2) NOT NULL,
    "com_gran_total" DECIMAL(10,2) NOT NULL,
    "prov_id" INTEGER NOT NULL,

    CONSTRAINT "Compras_pkey" PRIMARY KEY ("com_id")
);

-- CreateTable
CREATE TABLE "Venta" (
    "venta_id" SERIAL NOT NULL,
    "venta_fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "venta_monto" DECIMAL(10,2) NOT NULL,
    "venta_iva" DECIMAL(10,2) NOT NULL,
    "venta_gran_total" DECIMAL(10,2) NOT NULL,
    "cli_id" INTEGER NOT NULL,
    "ven_id" INTEGER NOT NULL,

    CONSTRAINT "Venta_pkey" PRIMARY KEY ("venta_id")
);

-- CreateTable
CREATE TABLE "Item_compra" (
    "item_id_compra" SERIAL NOT NULL,
    "item_cantidad_compra" INTEGER NOT NULL,
    "item_precio_total_compra" DECIMAL(10,2) NOT NULL,
    "com_id" INTEGER NOT NULL,
    "pro_id" INTEGER NOT NULL,

    CONSTRAINT "Item_compra_pkey" PRIMARY KEY ("item_id_compra")
);

-- CreateTable
CREATE TABLE "Item_venta" (
    "item_id_venta" SERIAL NOT NULL,
    "item_cantidad_venta" INTEGER NOT NULL,
    "item_precio_tot_venta" DECIMAL(10,2) NOT NULL,
    "venta_id" INTEGER NOT NULL,
    "pro_id" INTEGER NOT NULL,

    CONSTRAINT "Item_venta_pkey" PRIMARY KEY ("item_id_venta")
);

-- CreateIndex
CREATE UNIQUE INDEX "Clientes_cli_rfc_key" ON "Clientes"("cli_rfc");

-- AddForeignKey
ALTER TABLE "Productos" ADD CONSTRAINT "Productos_cat_id_fkey" FOREIGN KEY ("cat_id") REFERENCES "Categoria"("cat_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proveedor" ADD CONSTRAINT "Proveedor_cat_id_fkey" FOREIGN KEY ("cat_id") REFERENCES "Categoria"("cat_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Compras" ADD CONSTRAINT "Compras_prov_id_fkey" FOREIGN KEY ("prov_id") REFERENCES "Proveedor"("prov_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_cli_id_fkey" FOREIGN KEY ("cli_id") REFERENCES "Clientes"("cli_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_ven_id_fkey" FOREIGN KEY ("ven_id") REFERENCES "Vendedor"("ven_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item_compra" ADD CONSTRAINT "Item_compra_com_id_fkey" FOREIGN KEY ("com_id") REFERENCES "Compras"("com_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item_compra" ADD CONSTRAINT "Item_compra_pro_id_fkey" FOREIGN KEY ("pro_id") REFERENCES "Productos"("pro_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item_venta" ADD CONSTRAINT "Item_venta_venta_id_fkey" FOREIGN KEY ("venta_id") REFERENCES "Venta"("venta_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item_venta" ADD CONSTRAINT "Item_venta_pro_id_fkey" FOREIGN KEY ("pro_id") REFERENCES "Productos"("pro_id") ON DELETE RESTRICT ON UPDATE CASCADE;
