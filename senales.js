/* Señales de tránsito (CONASET) en SVG vectorial, para las preguntas de señalización.
   Reproducción fiel de señales estandarizadas — no se inventan. */
(function(){
  "use strict";
  var RED="#D62828", YEL="#FFC800", BLK="#1c1c1c", BLU="#0B5CAB", WHT="#ffffff", ORA="#FF7A00", GRN="#12b886";

  function svg(inner){
    return '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" style="width:100%;height:100%">'+inner+'</svg>';
  }
  var DIAMOND='<polygon points="50,3 97,50 50,97 3,50" fill="'+YEL+'" stroke="'+BLK+'" stroke-width="5" stroke-linejoin="round"/>';
  var DIAMOND_O='<polygon points="50,3 97,50 50,97 3,50" fill="'+ORA+'" stroke="'+BLK+'" stroke-width="5" stroke-linejoin="round"/>';
  function circReg(){ return '<circle cx="50" cy="50" r="44" fill="'+WHT+'"/><circle cx="50" cy="50" r="44" fill="none" stroke="'+RED+'" stroke-width="11"/>'; }
  function circBlue(){ return '<circle cx="50" cy="50" r="46" fill="'+BLU+'"/>'; }
  function slash(){ return '<line x1="21" y1="21" x2="79" y2="79" stroke="'+RED+'" stroke-width="10" stroke-linecap="round"/>'; }

  var S={};

  S.pare = svg(
    '<polygon points="93.4,68 68,93.4 32,93.4 6.6,68 6.6,32 32,6.6 68,6.6 93.4,32" fill="'+RED+'" stroke="'+WHT+'" stroke-width="6" stroke-linejoin="round"/>'+
    '<text x="50" y="59" font-size="24" font-weight="800" text-anchor="middle" fill="'+WHT+'" font-family="system-ui,Arial">PARE</text>');

  S.ceda = svg(
    '<polygon points="9,17 91,17 50,89" fill="'+WHT+'" stroke="'+RED+'" stroke-width="11" stroke-linejoin="round"/>');

  S.vel_max = svg( circReg()+
    '<text x="50" y="63" font-size="34" font-weight="800" text-anchor="middle" fill="'+BLK+'" font-family="system-ui,Arial">60</text>');

  S.no_adelantar = svg( circReg()+
    '<rect x="24" y="42" width="24" height="15" rx="3" fill="'+RED+'"/>'+
    '<rect x="52" y="42" width="24" height="15" rx="3" fill="'+BLK+'"/>'+
    '<rect x="27" y="57" width="6" height="5" rx="1" fill="'+BLK+'"/><rect x="39" y="57" width="6" height="5" rx="1" fill="'+BLK+'"/>'+
    '<rect x="55" y="57" width="6" height="5" rx="1" fill="'+BLK+'"/><rect x="67" y="57" width="6" height="5" rx="1" fill="'+BLK+'"/>');

  S.no_estacionar = svg(
    '<circle cx="50" cy="50" r="45" fill="'+BLU+'"/>'+
    '<circle cx="50" cy="50" r="45" fill="none" stroke="'+RED+'" stroke-width="9"/>'+ slash());

  S.silencio = svg( circReg()+
    // bocina simplificada + ondas + slash
    '<path d="M30 44 L42 44 L54 34 L54 66 L42 56 L30 56 Z" fill="'+BLK+'"/>'+
    '<path d="M60 40 Q68 50 60 60" fill="none" stroke="'+BLK+'" stroke-width="4" stroke-linecap="round"/>'+
    '<path d="M66 34 Q78 50 66 66" fill="none" stroke="'+BLK+'" stroke-width="4" stroke-linecap="round"/>'+ slash());

  S.cadenas = svg( circBlue()+
    '<circle cx="50" cy="50" r="20" fill="none" stroke="'+WHT+'" stroke-width="6"/>'+
    '<circle cx="50" cy="50" r="9" fill="none" stroke="'+WHT+'" stroke-width="4"/>'+
    '<g stroke="'+WHT+'" stroke-width="3">'+
    '<circle cx="50" cy="26" r="4" fill="none"/><circle cx="74" cy="50" r="4" fill="none"/>'+
    '<circle cx="50" cy="74" r="4" fill="none"/><circle cx="26" cy="50" r="4" fill="none"/></g>');

  S.no_virar_izq = svg( circReg()+
    '<path d="M58 68 L58 50 Q58 42 50 42 L36 42" fill="none" stroke="'+BLK+'" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>'+
    '<polygon points="40,32 26,42 40,52" fill="'+BLK+'"/>'+ slash());

  S.dir_obligada = svg( circBlue()+
    '<path d="M50 74 L50 34" stroke="'+WHT+'" stroke-width="8" stroke-linecap="round"/>'+
    '<polygon points="50,22 38,40 62,40" fill="'+WHT+'"/>');

  S.semaforo = svg( DIAMOND+
    '<rect x="40" y="26" width="20" height="46" rx="6" fill="'+BLK+'"/>'+
    '<circle cx="50" cy="36" r="5.5" fill="'+RED+'"/>'+
    '<circle cx="50" cy="49" r="5.5" fill="'+YEL+'"/>'+
    '<circle cx="50" cy="62" r="5.5" fill="'+GRN+'"/>');

  S.resbaladizo = svg( DIAMOND+
    '<rect x="32" y="40" width="30" height="12" rx="3" fill="'+BLK+'"/>'+
    '<rect x="37" y="33" width="16" height="9" rx="3" fill="'+BLK+'"/>'+
    '<circle cx="39" cy="54" r="5" fill="'+BLK+'"/><circle cx="57" cy="54" r="5" fill="'+BLK+'"/>'+
    '<path d="M26 66 Q31 60 36 66 T46 66" fill="none" stroke="'+BLK+'" stroke-width="3"/>'+
    '<path d="M54 66 Q59 60 64 66 T74 66" fill="none" stroke="'+BLK+'" stroke-width="3"/>');

  S.animales = svg( DIAMOND+
    // vaca simplificada
    '<path d="M28 58 Q26 42 40 42 L62 42 Q74 42 72 56 L72 66 L66 66 L66 58 L34 58 L34 66 L28 66 Z" fill="'+BLK+'"/>'+
    '<path d="M62 42 L74 34 L76 40 Z" fill="'+BLK+'"/>'+
    '<path d="M40 42 L44 34" stroke="'+BLK+'" stroke-width="3"/>'+
    '<circle cx="70" cy="46" r="2" fill="'+YEL+'"/>');

  S.curva = svg( DIAMOND+
    '<path d="M40 78 Q40 46 56 46 Q40 46 40 24" fill="none" stroke="'+BLK+'" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" transform="translate(2,0)"/>'+
    '<path d="M46 76 L38 82 L34 72 Z" fill="'+BLK+'"/>');

  S.pendiente = svg( DIAMOND+
    '<path d="M22 34 L78 70" stroke="'+BLK+'" stroke-width="4"/>'+
    '<text x="52" y="46" font-size="18" font-weight="800" fill="'+BLK+'" font-family="system-ui,Arial">10%</text>'+
    '<polygon points="70,58 82,64 74,72" fill="'+BLK+'"/>');

  S.gravilla = svg( DIAMOND+
    '<rect x="30" y="42" width="26" height="12" rx="3" fill="'+BLK+'"/>'+
    '<circle cx="36" cy="56" r="5" fill="'+BLK+'"/><circle cx="52" cy="56" r="5" fill="'+BLK+'"/>'+
    '<g fill="'+BLK+'"><circle cx="64" cy="44" r="2.4"/><circle cx="70" cy="52" r="2.4"/><circle cx="66" cy="60" r="2.4"/><circle cx="74" cy="44" r="2.4"/></g>');

  S.escuela = svg( DIAMOND+
    // dos peatones/niños
    '<g fill="'+BLK+'">'+
    '<circle cx="40" cy="34" r="5"/><path d="M40 40 L40 58 M40 46 L32 52 M40 46 L48 52 M40 58 L34 72 M40 58 L46 72" stroke="'+BLK+'" stroke-width="4" fill="none" stroke-linecap="round"/>'+
    '<circle cx="60" cy="36" r="4.5"/><path d="M60 41 L60 58 M60 47 L53 52 M60 47 L67 52 M60 58 L55 70 M60 58 L65 70" stroke="'+BLK+'" stroke-width="3.5" fill="none" stroke-linecap="round"/>'+
    '</g>');

  S.ferroviario = svg( DIAMOND+
    '<rect x="26" y="40" width="48" height="8" fill="'+BLK+'"/>'+
    '<rect x="30" y="30" width="6" height="34" fill="'+BLK+'"/>'+
    '<rect x="48" y="30" width="6" height="34" fill="'+BLK+'"/>'+
    '<rect x="66" y="30" width="6" height="34" fill="'+BLK+'"/>');

  S.cruz_andres = svg(
    '<g transform="rotate(45 50 50)">'+
    '<rect x="12" y="42" width="76" height="16" rx="3" fill="'+WHT+'" stroke="'+RED+'" stroke-width="5"/>'+
    '<rect x="42" y="12" width="16" height="76" rx="3" fill="'+WHT+'" stroke="'+RED+'" stroke-width="5"/>'+
    '</g>');

  S.ambos_sentidos = svg( DIAMOND+
    '<g stroke="'+BLK+'" stroke-width="7" stroke-linecap="round">'+
    '<line x1="40" y1="28" x2="40" y2="72"/><line x1="60" y1="28" x2="60" y2="72"/></g>'+
    '<polygon points="40,22 33,36 47,36" fill="'+BLK+'"/>'+
    '<polygon points="60,78 53,64 67,64" fill="'+BLK+'"/>');

  S.hospital = svg(
    '<rect x="6" y="6" width="88" height="88" rx="10" fill="'+BLU+'"/>'+
    '<rect x="43" y="26" width="14" height="48" fill="'+WHT+'"/>'+
    '<rect x="26" y="43" width="48" height="14" fill="'+WHT+'"/>');

  S.info_estac = svg(
    '<rect x="6" y="6" width="88" height="88" rx="10" fill="'+BLU+'"/>'+
    '<text x="50" y="70" font-size="58" font-weight="800" text-anchor="middle" fill="'+WHT+'" font-family="system-ui,Arial">E</text>');

  S.trabajos = svg( DIAMOND_O+
    // trabajador simplificado + montículo
    '<circle cx="46" cy="30" r="6" fill="'+BLK+'"/>'+
    '<path d="M46 36 L46 56 M46 44 L58 34 M46 56 L40 72 M46 56 L52 72" stroke="'+BLK+'" stroke-width="4" fill="none" stroke-linecap="round"/>'+
    '<path d="M56 34 L66 24" stroke="'+BLK+'" stroke-width="4" stroke-linecap="round"/>'+
    '<path d="M60 72 Q72 60 84 72 Z" fill="'+BLK+'"/>');

  S.desvio = svg( DIAMOND_O+
    '<path d="M30 70 L30 46 Q30 38 42 38 L64 38" fill="none" stroke="'+BLK+'" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>'+
    '<polygon points="60,28 78,38 60,48" fill="'+BLK+'"/>');

  S.preventiva = S.curva; // muestra la forma (rombo amarillo)

  // ---- diccionario de coincidencias (frase normalizada -> clave) ----
  // el orden importa: primero las frases más específicas
  var MAP=[
    ["CEDA EL PASO","ceda"],
    ["PROXIMIDAD DE SEMAFORO","semaforo"],
    ["SEMAFORO","semaforo"],
    ["USO OBLIGATORIO DE CADENAS","cadenas"],
    ["CADENAS","cadenas"],
    ["PAVIMENTO RESBALADIZO","resbaladizo"],
    ["ANIMALES EN LA VIA","animales"],
    ["PROYECCION DE GRAVILLA","gravilla"],
    ["ZONA DE ESCUELA","escuela"],
    ["CRUZ DE SAN ANDRES","cruz_andres"],
    ["CRUCE FERROVIARIO","ferroviario"],
    ["CIRCULACION EN AMBOS SENTIDOS","ambos_sentidos"],
    ["PENDIENTE FUERTE EN BAJADA","pendiente"],
    ["PENDIENTE","pendiente"],
    ["NO VIRAR","no_virar_izq"],
    ["PROHIBIDO ESTACIONAR","no_estacionar"],
    ["ESTACIONAMIENTO PERMITIDO","info_estac"],
    ["NO ADELANTAR","no_adelantar"],
    ["SILENCIO","silencio"],
    ["VELOCIDAD MAXIMA","vel_max"],
    ["DIRECCION OBLIGADA","dir_obligada"],
    ["PRIMEROS AUXILIOS","hospital"],
    ["HOSPITAL","hospital"],
    ["TRABAJOS EN LA VIA","trabajos"],
    ["DESVIO","desvio"],
    ["PARE","pare"]
  ];

  function norm(s){ return (s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toUpperCase(); }

  // Overrides por contenido para preguntas con figura que SON señales conocidas
  function overrideKey(q){
    var e=norm(q.enunciado), c=q.correcta;
    // Módulo 5: "Significado de la señal mostrada" -> respuesta d = no virar izquierda + ruteos
    if(e.indexOf("SIGNIFICADO DE LA SENAL MOSTRADA")>=0 && c==="d") return "no_virar_izq";
    // Ensayo: "¿Qué significa esta señal?" -> respuesta b = proximidad de semáforo
    if(e.indexOf("QUE SIGNIFICA ESTA SENAL")>=0 && c==="b") return "semaforo";
    // Señalización P3: forma de las preventivas (rombo) -> mostrar ejemplo preventiva
    if(e.indexOf("ADVERTENCIA DE PELIGRO (PREVENTIVAS) TIENEN FORMA")>=0) return "preventiva";
    if(e.indexOf("PREVENTIVAS) TIENEN FORMA")>=0) return "preventiva";
    // Señalización: color de transitorias / color inicial de trabajos -> mostrar señal naranja
    if(e.indexOf("TRANSITORIAS")>=0 && e.indexOf("COLOR")>=0) return "trabajos";
    if(e.indexOf("PRESENCIA DE TRABAJOS EN LA VIA")>=0) return "trabajos";
    return null;
  }

  // Devuelve el SVG de la señal apropiada para la pregunta, o null.
  function signoPara(q){
    if(!q) return null;
    var ov=overrideKey(q);
    if(ov && S[ov]) return S[ov];
    var mod=norm(q.modulo);
    var isSenal = mod.indexOf("SENALIZACION")>=0;
    var e=norm(q.enunciado);
    // fuera del módulo señalización, solo si es pregunta marcada con figura
    if(!isSenal && !q.imagen) return null;
    for(var i=0;i<MAP.length;i++){
      var frase=MAP[i][0];
      if(e.indexOf(frase)>=0){
        // evitar falsos positivos de "PARE" dentro de otras palabras
        if(frase==="PARE"){
          if(/\bPARE\b/.test(e)) return S[MAP[i][1]];
          continue;
        }
        return S[MAP[i][1]];
      }
    }
    return null;
  }

  window.SENALES = S;
  window.signoPara = signoPara;
})();
