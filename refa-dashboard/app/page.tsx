"use client";

import React, { useState } from 'react';

export default function DashboardVendedor() {
  // Estado para controlar qué vista se muestra
  const [vistaActiva, setVistaActiva] = useState('dashboard');

  // --- DATOS SIMULADOS (MOCKS) ---
  const ultimasVentas = [
    { id: 101, cliente: 'Taller El Tuercas', fecha: '2026-05-01', total: 1250.50 },
    { id: 102, cliente: 'Público en General', fecha: '2026-05-01', total: 340.00 },
  ];

  const inventario = [
    { id: 1, nombre: 'Filtro de Aceite', stock: 2, precio: 150.00, categoria: 'Filtros' },
    { id: 2, nombre: 'Aceite Sintético 5W-30', stock: 24, precio: 850.00, categoria: 'Líquidos' },
    { id: 15, nombre: 'Balatas Delanteras', stock: 1, precio: 600.00, categoria: 'Frenos' },
    { id: 23, nombre: 'Bujías de Iridio (Set)', stock: 12, precio: 220.00, categoria: 'Encendido' },
  ];

  const clientes = [
    { id: 1, nombre: 'Taller El Tuercas', rfc: 'XAXX010101000', contacto: 'Juan Pérez' },
    { id: 2, nombre: 'Refaccionaria del Sur', rfc: 'REFS991201A12', contacto: 'María Gómez' },
    { id: 3, nombre: 'Público en General', rfc: 'XAXX010101000', contacto: 'N/A' },
  ];

  // --- VISTAS (RENDERIZADO CONDICIONAL) ---

  const renderDashboard = () => (
    <div className="p-6 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6">Resumen del Día</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 text-sm font-medium">Ventas de Hoy</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">$1,590.50</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 text-sm font-medium">Tickets Emitidos</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">2</p>
        </div>
        <div 
          onClick={() => setVistaActiva('venta')}
          className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 rounded-xl shadow-sm text-white flex items-center justify-between cursor-pointer hover:shadow-lg transition-shadow">
          <div>
            <h3 className="text-blue-100 text-sm font-medium">Acción Rápida</h3>
            <p className="text-xl font-bold mt-1">Nueva Venta</p>
          </div>
          <div className="text-4xl">➕</div>
        </div>
      </div>
    </div>
  );

  const renderNuevaVenta = () => (
    <div className="p-6 flex flex-col h-full">
      <h2 className="text-2xl font-bold mb-4">Punto de Venta</h2>
      <div className="flex gap-6 h-full">
        {/* Carrito / Buscador */}
        <div className="flex-1 bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <input 
            type="text" 
            placeholder="Buscar producto por nombre o ID (Ej: Filtro)..." 
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex-1 border border-gray-200 rounded-lg overflow-y-auto bg-gray-50 p-4 flex items-center justify-center">
            <p className="text-gray-400">El carrito está vacío. Busca un producto para agregarlo.</p>
          </div>
        </div>
        {/* Resumen de Cobro */}
        <div className="w-80 bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-lg mb-4 border-b pb-2">Resumen</h3>
            <div className="mb-4">
              <label className="text-sm text-gray-500 block mb-1">Cliente</label>
              <select className="w-full p-2 border border-gray-300 rounded-lg">
                {clientes.map(c => <option key={c.id}>{c.nombre}</option>)}
              </select>
            </div>
            <div className="flex justify-between text-sm mb-2 text-gray-600"><span>Subtotal:</span> <span>$0.00</span></div>
            <div className="flex justify-between text-sm mb-2 text-gray-600"><span>IVA (16%):</span> <span>$0.00</span></div>
            <div className="flex justify-between font-bold text-xl mt-4 pt-4 border-t border-gray-200">
              <span>Total:</span> <span>$0.00</span>
            </div>
          </div>
          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg mt-4 transition-colors">
            Cobrar e Imprimir
          </button>
        </div>
      </div>
    </div>
  );

  const renderInventario = () => (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Inventario de Productos</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          + Nuevo Producto
        </button>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-sm">
              <th className="p-4 font-medium">ID</th>
              <th className="p-4 font-medium">Nombre</th>
              <th className="p-4 font-medium">Categoría</th>
              <th className="p-4 font-medium">Precio</th>
              <th className="p-4 font-medium">Stock</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {inventario.map((item) => (
              <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="p-4 text-gray-500">#{item.id}</td>
                <td className="p-4 font-medium text-gray-800">{item.nombre}</td>
                <td className="p-4">{item.categoria}</td>
                <td className="p-4">${item.precio.toFixed(2)}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${item.stock <= 2 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                    {item.stock}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderClientes = () => (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Directorio de Clientes</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          + Nuevo Cliente
        </button>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-sm">
              <th className="p-4 font-medium">Empresa / Nombre</th>
              <th className="p-4 font-medium">RFC</th>
              <th className="p-4 font-medium">Contacto Principal</th>
              <th className="p-4 font-medium text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {clientes.map((cliente) => (
              <tr key={cliente.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-800">{cliente.nombre}</td>
                <td className="p-4 font-mono text-xs text-gray-600">{cliente.rfc}</td>
                <td className="p-4">{cliente.contacto}</td>
                <td className="p-4 text-right">
                  <button className="text-blue-600 hover:underline text-sm">Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // --- RENDERIZADO PRINCIPAL ---
  return (
    <div className="flex h-screen bg-gray-100 text-gray-800 font-sans">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-slate-800 text-white flex flex-col">
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-2xl font-bold text-blue-400">RefaSystem</h1>
          <p className="text-sm text-slate-400 mt-1">Panel de Vendedor</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setVistaActiva('dashboard')}
            className={`w-full text-left p-3 rounded-lg transition-colors ${vistaActiva === 'dashboard' ? 'bg-blue-600 shadow font-medium' : 'hover:bg-slate-700'}`}>
            📊 Inicio (Dashboard)
          </button>
          <button 
            onClick={() => setVistaActiva('venta')}
            className={`w-full text-left p-3 rounded-lg transition-colors ${vistaActiva === 'venta' ? 'bg-blue-600 shadow font-medium' : 'hover:bg-slate-700'}`}>
            🛒 Nueva Venta
          </button>
          <button 
            onClick={() => setVistaActiva('inventario')}
            className={`w-full text-left p-3 rounded-lg transition-colors ${vistaActiva === 'inventario' ? 'bg-blue-600 shadow font-medium' : 'hover:bg-slate-700'}`}>
            📦 Consultar Inventario
          </button>
          <button 
            onClick={() => setVistaActiva('clientes')}
            className={`w-full text-left p-3 rounded-lg transition-colors ${vistaActiva === 'clientes' ? 'bg-blue-600 shadow font-medium' : 'hover:bg-slate-700'}`}>
            👥 Clientes
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm p-4 flex justify-end items-center border-b border-gray-200">
          <div className="flex items-center gap-4">
             <span className="text-sm text-gray-500">Modo Pruebas (Frontend)</span>
             <div className="h-8 w-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                V1
             </div>
          </div>
        </header>

        {/* Aquí es donde ocurre la magia, inyectamos la función dependiendo del estado */}
        <div className="flex-1 overflow-auto">
          {vistaActiva === 'dashboard' && renderDashboard()}
          {vistaActiva === 'venta' && renderNuevaVenta()}
          {vistaActiva === 'inventario' && renderInventario()}
          {vistaActiva === 'clientes' && renderClientes()}
        </div>
      </main>
    </div>
  );
}