// Base de datos local reconstruida a partir del script SQL proporcionado
const db = {
  equipos: [
    { id: 1, nombre: 'Argentina', iso: 'ARG', confederacion: 'CONMEBOL', grupo: 'A', ranking_fifa: 1, elo: 2140, entrenador: 'Lionel Scaloni' },
    { id: 2, nombre: 'Francia', iso: 'FRA', confederacion: 'UEFA', grupo: 'D', ranking_fifa: 2, elo: 2080, entrenador: 'Didier Deschamps' },
    { id: 3, nombre: 'Brasil', iso: 'BRA', confederacion: 'CONMEBOL', grupo: 'G', ranking_fifa: 5, elo: 2010, entrenador: 'Dorival Júnior' },
    { id: 4, nombre: 'España', iso: 'ESP', confederacion: 'UEFA', grupo: 'E', ranking_fifa: 8, elo: 2035, entrenador: 'Luis de la Fuente' }
  ],
  jugadores: [
    { id: 1, equipo_id: 1, nombre: 'Lionel Messi', posicion: 'Delantero', dorsal: 10, nac: '1987-06-24', club: 'Inter Miami', pj: 180, goles: 106, valor: 35000000 },
    { id: 2, equipo_id: 1, nombre: 'Julián Álvarez', posicion: 'Delantero', dorsal: 9, nac: '2000-01-31', club: 'Atlético Madrid', pj: 36, goles: 9, valor: 90000000 },
    { id: 3, equipo_id: 1, nombre: 'Emiliano Martínez', posicion: 'Portero', dorsal: 23, nac: '1992-09-02', club: 'Aston Villa', pj: 45, goles: 0, valor: 28000000 },
    { id: 4, equipo_id: 2, nombre: 'Kylian Mbappé', posicion: 'Delantero', dorsal: 10, nac: '1998-12-20', club: 'Real Madrid', pj: 84, goles: 48, valor: 180000000 },
    { id: 5, equipo_id: 2, nombre: 'Antoine Griezmann', posicion: 'Centrocampista', dorsal: 7, nac: '1991-03-21', club: 'Atlético Madrid', pj: 137, goles: 44, valor: 25000000 },
    { id: 6, equipo_id: 3, nombre: 'Vinícius Júnior', posicion: 'Delantero', dorsal: 7, nac: '2000-07-12', club: 'Real Madrid', pj: 33, goles: 5, valor: 180000000 },
    { id: 7, equipo_id: 3, nombre: 'Rodrygo Goes', posicion: 'Delantero', dorsal: 10, nac: '2001-01-09', club: 'Real Madrid', pj: 27, goles: 6, valor: 110000000 },
    { id: 8, equipo_id: 4, nombre: 'Lamine Yamal', posicion: 'Delantero', dorsal: 19, nac: '2007-07-13', club: 'FC Barcelona', pj: 14, goles: 3, valor: 120000000 },
    { id: 9, equipo_id: 4, nombre: 'Rodri Hernández', posicion: 'Centrocampista', dorsal: 16, nac: '1996-06-22', club: 'Manchester City', pj: 56, goles: 4, valor: 130000000 },
    { id: 10, equipo_id: 4, nombre: 'Dani Carvajal', posicion: 'Defensa', dorsal: 2, nac: '1992-01-11', club: 'Real Madrid', pj: 49, goles: 1, valor: 12000000 }
  ],
  partidos: [
    { id: 101, etapa: 'Fase de Grupos', sede: 'Estadio Icónico de Lusail', local: 'Argentina', visitante: 'Francia', fecha: '2022-12-18 16:00', gl: 3, gv: 3, pen_l: 4, pen_v: 2, xg_l: 3.2, xg_v: 2.1, arbitro: 'Szymon Marciniak' },
    { id: 102, etapa: 'Fase de Grupos', sede: 'Estadio Maracaná', local: 'Brasil', visitante: 'Argentina', fecha: '2023-11-21 21:30', gl: 0, gv: 1, pen_l: null, pen_v: null, xg_l: 0.8, xg_v: 1.1, arbitro: 'Piero Maza' },
    { id: 103, etapa: 'Semifinales', sede: 'Estadio Santiago Bernabéu', local: 'España', visitante: 'Francia', fecha: '2024-07-09 21:00', gl: 2, gv: 1, pen_l: null, pen_v: null, xg_l: 1.4, xg_v: 1.0, arbitro: 'Slavko Vinčić' }
  ],
  alineaciones: [
    { id: 1, partido_id: 101, jugador_id: 1, titular: true, posicion: 'ED', entra: 0, sale: 120, minutos: 120 },
    { id: 2, partido_id: 101, jugador_id: 2, titular: true, posicion: 'DC', entra: 0, sale: 102, minutos: 102 },
    { id: 3, partido_id: 101, jugador_id: 3, titular: true, posicion: 'POR', entra: 0, sale: 120, minutos: 120 },
    { id: 4, partido_id: 101, jugador_id: 4, titular: true, posicion: 'EI', entra: 0, sale: 120, minutos: 120 },
    { id: 5, partido_id: 101, jugador_id: 5, titular: true, posicion: 'MCO', entra: 0, sale: 71, minutos: 71 },
    { id: 6, partido_id: 102, jugador_id: 6, titular: true, posicion: 'EI', entra: 0, sale: 90, minutos: 90 },
    { id: 7, partido_id: 102, jugador_id: 7, titular: true, posicion: 'ED', entra: 0, sale: 90, minutos: 90 },
    { id: 8, partido_id: 103, jugador_id: 8, titular: true, posicion: 'ED', entra: 0, sale: 89, minutos: 89 },
    { id: 9, partido_id: 103, jugador_id: 9, titular: true, posicion: 'MCD', entra: 0, sale: 90, minutos: 90 },
    { id: 10, partido_id: 103, jugador_id: 10, titular: true, posicion: 'LD', entra: 0, sale: 90, minutos: 90 }
  ],
  est_equipo: [
    { id: 1, partido_id: 101, equipo: 'Argentina', posesion: 54.5, tiros: 20, a_puerta: 10, faltas: 26, corners: 6, amarillas: 5, rojas: 0 },
    { id: 2, partido_id: 101, equipo: 'Francia', posesion: 45.5, tiros: 10, a_puerta: 5, faltas: 19, corners: 5, amarillas: 3, rojas: 0 },
    { id: 3, partido_id: 102, equipo: 'Brasil', posesion: 50.0, tiros: 8, a_puerta: 2, faltas: 16, corners: 4, amarillas: 3, rojas: 1 },
    { id: 4, partido_id: 102, equipo: 'Argentina', posesion: 50.0, tiros: 8, a_puerta: 2, faltas: 14, corners: 2, amarillas: 3, rojas: 0 },
    { id: 5, partido_id: 103, equipo: 'España', posesion: 58.2, tiros: 12, a_puerta: 6, faltas: 9, corners: 4, amarillas: 2, rojas: 0 },
    { id: 6, partido_id: 103, equipo: 'Francia', posesion: 41.8, tiros: 9, a_puerta: 3, faltas: 11, corners: 6, amarillas: 2, rojas: 0 }
  ],
  est_jugador: [
    { id: 1, jugador_id: 1, pj: 7, titular: 7, minutos: 690, goles: 7, penaltis: 4, asistencias: 3, amarillas: 1, rojas: 0 },
    { id: 2, jugador_id: 2, pj: 7, titular: 5, minutos: 464, goles: 4, penaltis: 0, asistencias: 1, amarillas: 1, rojas: 0 },
    { id: 3, jugador_id: 3, pj: 7, titular: 7, minutos: 690, goles: 0, penaltis: 0, asistencias: 0, amarillas: 1, rojas: 0 },
    { id: 4, jugador_id: 4, pj: 7, titular: 7, minutos: 660, goles: 8, penaltis: 2, asistencias: 2, amarillas: 0, rojas: 0 },
    { id: 5, jugador_id: 5, pj: 7, titular: 6, minutos: 538, goles: 0, penaltis: 0, asistencias: 3, amarillas: 1, rojas: 0 },
    { id: 6, jugador_id: 6, pj: 4, titular: 4, minutos: 341, goles: 0, penaltis: 0, asistencias: 2, amarillas: 0, rojas: 0 },
    { id: 7, jugador_id: 7, pj: 5, titular: 4, minutos: 370, goles: 1, penaltis: 0, asistencias: 0, amarillas: 1, rojas: 0 },
    { id: 8, jugador_id: 8, pj: 7, titular: 7, minutos: 507, goles: 1, penaltis: 0, asistencias: 4, amarillas: 1, rojas: 0 },
    { id: 9, jugador_id: 9, pj: 6, titular: 6, minutos: 537, goles: 1, penaltis: 0, asistencias: 0, amarillas: 3, rojas: 0 },
    { id: 10, jugador_id: 10, pj: 5, titular: 5, minutos: 406, goles: 1, penaltis: 0, asistencias: 1, amarillas: 2, rojas: 1 }
  ],
  arbitros: [
    { id: 1, nombre: 'Szymon Marciniak', pais: 'Polonia', tarjetas_prom: 4.2 },
    { id: 2, nombre: 'Piero Maza', pais: 'Chile', tarjetas_prom: 5.1 },
    { id: 3, nombre: 'Slavko Vinčić', pais: 'Eslovenia', tarjetas_prom: 3.8 }
  ],
  sedes: [
    { id: 1, nombre: 'Estadio Icónico de Lusail', ciudad: 'Lusail', pais: 'Catar', capacidad: 88966 },
    { id: 2, nombre: 'Estadio Maracaná', ciudad: 'Río de Janeiro', pais: 'Brasil', capacidad: 78838 },
    { id: 3, nombre: 'Estadio Santiago Bernabéu', ciudad: 'Madrid', pais: 'España', capacidad: 81044 }
  ],
  eventos: [
    { id: 1, partido_id: 101, minuto: 23, tipo: 'Gol Penalti', j1: 1, j2: null },
    { id: 2, partido_id: 101, minuto: 36, tipo: 'Gol', j1: 2, j2: 1 },
    { id: 3, partido_id: 101, minuto: 80, tipo: 'Gol Penalti', j1: 4, j2: null },
    { id: 4, partido_id: 101, minuto: 81, tipo: 'Gol', j1: 4, j2: 5 },
    { id: 5, partido_id: 101, minuto: 108, tipo: 'Gol', j1: 1, j2: null },
    { id: 6, partido_id: 101, minuto: 118, tipo: 'Gol Penalti', j1: 4, j2: null },
    { id: 7, partido_id: 102, minuto: 63, tipo: 'Gol', j1: 2, j2: null },
    { id: 8, partido_id: 103, minuto: 21, tipo: 'Gol', j1: 8, j2: null }
  ],
  etapas: [
    { id: 1, nombre: 'Fase de Grupos', eliminatoria: false },
    { id: 2, nombre: 'Octavos de Final', eliminatoria: true },
    { id: 3, nombre: 'Cuartos de Final', eliminatoria: true },
    { id: 4, nombre: 'Semifinales', eliminatoria: true },
    { id: 5, nombre: 'Final', eliminatoria: true }
  ]
};

// Renderizado dinámico de las tablas
document.addEventListener('DOMContentLoaded', () => {
  renderTables();
  initCharts();
  initSearch();
});

function renderTables() {
  // Equipos
  document.getElementById('data-equipos').innerHTML = db.equipos.map(e => `
    <tr class="hover:bg-slate-800/60 transition">
      <td class="p-3 font-semibold text-indigo-400">#${e.id}</td>
      <td class="p-3 font-medium text-white">${e.nombre}</td>
      <td class="p-3"><span class="bg-slate-700 text-slate-200 px-2 py-0.5 rounded text-xs">${e.iso}</span></td>
      <td class="p-3">${e.confederacion}</td>
      <td class="p-3">${e.grupo}</td>
      <td class="p-3">${e.ranking_fifa}º</td>
      <td class="p-3">${e.elo} pts</td>
      <td class="p-3">${e.entrenador}</td>
    </tr>
  `).join('');

  // Jugadores
  document.getElementById('data-jugadores').innerHTML = db.jugadores.map(j => `
    <tr class="hover:bg-slate-800/60 transition">
      <td class="p-3 font-semibold text-indigo-400">#${j.id}</td>
      <td class="p-3">Equipo ${j.equipo_id}</td>
      <td class="p-3 font-medium text-white">${j.nombre}</td>
      <td class="p-3">${j.posicion}</td>
      <td class="p-3"><span class="bg-indigo-900/60 text-indigo-300 font-bold px-2 py-0.5 rounded">${j.dorsal}</span></td>
      <td class="p-3">${j.nac}</td>
      <td class="p-3">${j.club}</td>
      <td class="p-3">${j.pj}</td>
      <td class="p-3 font-semibold text-emerald-400">${j.goles}</td>
      <td class="p-3">€${(j.valor / 1000000).toFixed(1)}M</td>
    </tr>
  `).join('');

  // Partidos
  document.getElementById('data-partidos').innerHTML = db.partidos.map(p => `
    <tr class="hover:bg-slate-800/60 transition">
      <td class="p-3 font-semibold text-indigo-400">#${p.id}</td>
      <td class="p-3">${p.etapa}</td>
      <td class="p-3">${p.sede}</td>
      <td class="p-3 font-medium text-white">${p.local} vs ${p.visitante}</td>
      <td class="p-3 text-xs text-slate-400">${p.fecha}</td>
      <td class="p-3"><span class="bg-slate-700 px-2 py-1 rounded font-bold">${p.gl} - ${p.gv}</span> ${p.pen_l !== null ? `<span class="text-xs text-slate-400">(${p.pen_l}-${p.pen_v} pen)</span>` : ''}</td>
      <td class="p-3 text-xs">${p.xg_l} / ${p.xg_v}</td>
      <td class="p-3">${p.arbitro}</td>
    </tr>
  `).join('');

  // Alineaciones
  document.getElementById('data-alineaciones').innerHTML = db.alineaciones.map(a => `
    <tr class="hover:bg-slate-800/60 transition">
      <td class="p-3 font-semibold text-indigo-400">#${a.id}</td>
      <td class="p-3">Partido #${a.partido_id}</td>
      <td class="p-3">Jugador #${a.jugador_id}</td>
      <td class="p-3">${a.titular ? '<span class="text-emerald-400 font-semibold">Sí</span>' : '<span class="text-slate-400">No</span>'}</td>
      <td class="p-3"><span class="bg-slate-700 text-xs px-2 py-0.5 rounded">${a.posicion}</span></td>
      <td class="p-3">${a.entra}'</td>
      <td class="p-3">${a.sale}'</td>
      <td class="p-3 font-semibold">${a.minutos}'</td>
    </tr>
  `).join('');

  // Estadísticas Equipo
  document.getElementById('data-est-equipo').innerHTML = db.est_equipo.map(e => `
    <tr class="hover:bg-slate-800/60 transition">
      <td class="p-3 font-semibold text-indigo-400">#${e.id}</td>
      <td class="p-3">Partido #${e.partido_id}</td>
      <td class="p-3 font-medium text-white">${e.equipo}</td>
      <td class="p-3 font-semibold text-indigo-300">${e.posesion}%</td>
      <td class="p-3">${e.tiros} (${e.a_puerta})</td>
      <td class="p-3">${e.faltas}</td>
      <td class="p-3">${e.corners}</td>
      <td class="p-3"><span class="text-amber-400">${e.amarillas} A</span> / <span class="text-rose-400">${e.rojas} R</span></td>
    </tr>
  `).join('');

  // Estadísticas Jugador
  document.getElementById('data-est-jugador').innerHTML = db.est_jugador.map(ej => `
    <tr class="hover:bg-slate-800/60 transition">
      <td class="p-3 font-semibold text-indigo-400">#${ej.id}</td>
      <td class="p-3">Jugador #${ej.jugador_id}</td>
      <td class="p-3">${ej.pj} / ${ej.titular}</td>
      <td class="p-3">${ej.minutos}'</td>
      <td class="p-3 font-bold text-emerald-400">${ej.goles} ${ej.penaltis > 0 ? `<span class="text-xs text-slate-400">(${ej.penaltis}p)</span>` : ''}</td>
      <td class="p-3 text-indigo-300">${ej.asistencias}</td>
      <td class="p-3"><span class="text-amber-400">${ej.amarillas} A</span> / <span class="text-rose-400">${ej.rojas} R</span></td>
    </tr>
  `).join('');

  // Árbitros
  document.getElementById('data-arbitros').innerHTML = db.arbitros.map(a => `
    <tr class="hover:bg-slate-800/60 transition">
      <td class="p-3 font-semibold text-indigo-400">#${a.id}</td>
      <td class="p-3 font-medium text-white">${a.nombre}</td>
      <td class="p-3">${a.pais}</td>
      <td class="p-3 font-semibold text-amber-400">${a.tarjetas_prom}</td>
    </tr>
  `).join('');

  // Sedes
  document.getElementById('data-sedes').innerHTML = db.sedes.map(s => `
    <tr class="hover:bg-slate-800/60 transition">
      <td class="p-3 font-semibold text-indigo-400">#${s.id}</td>
      <td class="p-3 font-medium text-white">${s.nombre}</td>
      <td class="p-3">${s.ciudad}</td>
      <td class="p-3">${s.pais}</td>
      <td class="p-3 font-semibold">${s.capacidad.toLocaleString()} espectadores</td>
    </tr>
  `).join('');

  // Eventos
  document.getElementById('data-eventos').innerHTML = db.eventos.map(ev => `
    <tr class="hover:bg-slate-800/60 transition">
      <td class="p-3 font-semibold text-indigo-400">#${ev.id}</td>
      <td class="p-3">Partido #${ev.partido_id}</td>
      <td class="p-3 font-bold text-amber-400">${ev.minuto}'</td>
      <td class="p-3"><span class="bg-indigo-900/60 text-indigo-300 px-2 py-0.5 rounded text-xs font-semibold">${ev.tipo}</span></td>
      <td class="p-3">Jugador #${ev.j1}</td>
      <td class="p-3">${ev.j2 ? `Jugador #${ev.j2}` : '-'}</td>
    </tr>
  `).join('');

  // Etapas
  document.getElementById('data-etapas').innerHTML = db.etapas.map(et => `
    <tr class="hover:bg-slate-800/60 transition">
      <td class="p-3 font-semibold text-indigo-400">#${et.id}</td>
      <td class="p-3 font-medium text-white">${et.nombre}</td>
      <td class="p-3">${et.eliminatoria ? '<span class="text-rose-400 font-semibold">Sí (Eliminación directa)</span>' : '<span class="text-slate-400">No (Fase de puntos)</span>'}</td>
    </tr>
  `).join('');
}

// Navegación por pestañas
function showTab(tabId, btn) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.remove('bg-indigo-600', 'text-white');
    b.classList.add('bg-slate-800');
  });

  document.getElementById(`tab-${tabId}`).classList.remove('hidden');
  btn.classList.remove('bg-slate-800');
  btn.classList.add('bg-indigo-600', 'text-white');
}

// Buscador Global en tiempo real para la pestaña activa
function initSearch() {
  const searchInput = document.getElementById('global-search');
  searchInput.addEventListener('keyup', (e) => {
    const filter = e.target.value.toLowerCase();
    const activeTab = document.querySelector('.tab-content:not(.hidden)');
    if (!activeTab) return;

    const rows = activeTab.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const text = row.innerText.toLowerCase();
      row.style.display = text.includes(filter) ? '' : 'none';
    });
  });
}

// Inicialización de Gráficos con Chart.js
function initCharts() {
  // Gráfico 1: Goles vs xG por equipo
  const ctx1 = document.getElementById('chartGolesXG').getContext('2d');
  new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['Argentina', 'Francia', 'Brasil', 'España'],
      datasets: [
        { label: 'Goles Realizados', data: [4, 4, 0, 2], backgroundColor: '#6366f1' },
        { label: 'xG (Expectativa de Gol)', data: [4.3, 3.1, 0.8, 1.4], backgroundColor: '#10b981' }
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { labels: { color: '#cbd5e1' } } },
      scales: {
        x: { ticks: { color: '#cbd5e1' }, grid: { color: '#334155' } },
        y: { ticks: { color: '#cbd5e1' }, grid: { color: '#334155' } }
      }
    }
  });

  // Gráfico 2: Posesión Promedio
  const ctx2 = document.getElementById('chartPosesion').getContext('2d');
  new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ['España', 'Argentina', 'Brasil', 'Francia'],
      datasets: [{
        data: [58.2, 52.25, 50.0, 43.65],
        backgroundColor: ['#f59e0b', '#6366f1', '#10b981', '#ef4444']
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { labels: { color: '#cbd5e1' } } }
    }
  });

  // Gráfico 3: Ranking FIFA vs Puntuación ELO
  const ctx3 = document.getElementById('chartRanking').getContext('2d');
  new Chart(ctx3, {
    type: 'line',
    data: {
      labels: ['Argentina', 'Francia', 'Brasil', 'España'],
      datasets: [{
        label: 'Puntuación ELO',
        data: [2140, 2080, 2010, 2035],
        borderColor: '#38bdf8',
        backgroundColor: 'rgba(56, 189, 248, 0.2)',
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { labels: { color: '#cbd5e1' } } },
      scales: {
        x: { ticks: { color: '#cbd5e1' }, grid: { color: '#334155' } },
        y: { ticks: { color: '#cbd5e1' }, grid: { color: '#334155' } }
      }
    }
  });

  // Gráfico 4: Disparos a Puerta vs Total Disparos
  const ctx4 = document.getElementById('chartDisparos').getContext('2d');
  new Chart(ctx4, {
    type: 'bar',
    data: {
      labels: ['Argentina', 'Francia', 'España', 'Brasil'],
      datasets: [
        { label: 'Disparos Totales', data: [28, 19, 12, 8], backgroundColor: '#8b5cf6' },
        { label: 'Disparos a Puerta', data: [12, 8, 6, 2], backgroundColor: '#f43f5e' }
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { labels: { color: '#cbd5e1' } } },
      scales: {
        x: { ticks: { color: '#cbd5e1' }, grid: { color: '#334155' } },
        y: { ticks: { color: '#cbd5e1' }, grid: { color: '#334155' } }
      }
    }
  });
}