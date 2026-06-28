// === EXPORT CSS TEMPLATE (full style.css content) ===
const EXPORT_CSS = '@import url(\'https://fonts.googleapis.com/css2?family=Inter:opsz@14..32&display=swap\');\n' +
':root {\n' +
'  --primary: #4f46e5; --primary-dark: #3730a3; --primary-light: #eef2ff;\n' +
'  --accent: #f59e0b; --accent-dark: #d97706;\n' +
'  --success: #10b981; --danger: #ef4444; --info: #3b82f6;\n' +
'  --gray-50: #f8fafc; --gray-100: #f1f5f9; --gray-200: #e2e8f0;\n' +
'  --gray-300: #cbd5e1; --gray-400: #94a3b8; --gray-500: #64748b;\n' +
'  --gray-600: #475569; --gray-700: #334155; --gray-800: #1e293b;\n' +
'  --radius: 10px; --radius-lg: 14px;\n' +
'  --shadow-md: 0 4px 12px rgba(0,0,0,.07);\n' +
'  --shadow-lg: 0 8px 30px rgba(0,0,0,.1);\n' +
'  --transition: all .25s cubic-bezier(.4,0,.2,1);\n' +
'}\n' +
'* { margin: 0; padding: 0; box-sizing: border-box; }\n' +
'body {\n' +
'  font-family: \'Inter\', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;\n' +
'  background: linear-gradient(135deg, #f0f4ff 0%, #faf5ff 50%, #fefce8 100%);\n' +
'  color: var(--gray-800); min-height: 100vh;\n' +
'}\n' +
'::-webkit-scrollbar { width: 6px; height: 6px; }\n' +
'::-webkit-scrollbar-thumb { background: var(--gray-300); border-radius: 3px; }\n' +
'\n' +
'.app-header {\n' +
'  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #3730a3 100%);\n' +
'  color: #fff; padding: 0 32px; height: 64px;\n' +
'  display: flex; align-items: center; justify-content: space-between;\n' +
'  box-shadow: 0 4px 20px rgba(79,70,229,.25);\n' +
'  position: sticky; top: 0; z-index: 100;\n' +
'}\n' +
'.app-header .brand { display: flex; align-items: center; gap: 12px; }\n' +
'.app-header .brand-icon {\n' +
'  width: 34px; height: 34px;\n' +
'  background: linear-gradient(135deg, var(--accent), var(--accent-dark));\n' +
'  border-radius: 9px; display: flex; align-items: center; justify-content: center;\n' +
'  font-size: 17px;\n' +
'}\n' +
'.app-header .brand-text { font-size: 17px; font-weight: 700; }\n' +
'.app-header .brand-text span {\n' +
'  background: linear-gradient(135deg, #a78bfa, #8b5cf6);\n' +
'  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;\n' +
'}\n' +
'.header-right { display: flex; align-items: center; gap: 20px; font-size: 13px; }\n' +
'.header-right .stat { text-align: center; }\n' +
'.header-right .stat-val { font-size: 18px; font-weight: 700; }\n' +
'.header-right .stat-lbl { opacity: .7; font-size: 11px; }\n' +
'\n' +
'.app-main { padding: 20px 28px 40px; max-width: 1500px; margin: 0 auto; }\n' +
'\n' +
'.loading-overlay {\n' +
'  position: fixed; inset: 0; z-index: 9999;\n' +
'  background: rgba(255,255,255,.85); backdrop-filter: blur(4px);\n' +
'  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px;\n' +
'}\n' +
'.loading-overlay .spinner {\n' +
'  width: 44px; height: 44px; border: 4px solid var(--gray-200);\n' +
'  border-top-color: var(--primary); border-radius: 50%;\n' +
'  animation: spin .8s linear infinite;\n' +
'}\n' +
'@keyframes spin { to { transform: rotate(360deg); } }\n' +
'.loading-overlay .load-text { font-size: 15px; color: var(--gray-500); font-weight: 500; }\n' +
'.loading-overlay .load-sub { font-size: 12px; color: var(--gray-400); }\n' +
'\n' +
'.kpi-row { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 14px; margin-bottom: 20px; }\n' +
'.kpi-card {\n' +
'  background: #fff; border-radius: var(--radius-lg); padding: 16px 18px;\n' +
'  box-shadow: var(--shadow-md); border: 1px solid var(--gray-100);\n' +
'  position: relative; overflow: hidden;\n' +
'}\n' +
'.kpi-card::after { content: \'\'; position: absolute; top: 0; left: 0; right: 0; height: 3px; }\n' +
'.kpi-card:nth-child(1)::after { background: linear-gradient(90deg, var(--primary), #818cf8); }\n' +
'.kpi-card:nth-child(2)::after { background: linear-gradient(90deg, var(--accent), #fbbf24); }\n' +
'.kpi-card:nth-child(3)::after { background: linear-gradient(90deg, var(--danger), #f87171); }\n' +
'.kpi-card:nth-child(4)::after { background: linear-gradient(90deg, var(--info), #60a5fa); }\n' +
'.kpi-card:nth-child(5)::after { background: linear-gradient(90deg, var(--success), #34d399); }\n' +
'.kpi-card:nth-child(6)::after { background: linear-gradient(90deg, #8b5cf6, #a78bfa); }\n' +
'.kpi-card .kpi-lbl { font-size: 11px; color: var(--gray-400); font-weight: 500; text-transform: uppercase; letter-spacing: .5px; }\n' +
'.kpi-card .kpi-val { font-size: 22px; font-weight: 700; margin-top: 4px; font-variant-numeric: tabular-nums; }\n' +
'.kpi-card .kpi-sub { font-size: 11px; color: var(--gray-400); margin-top: 2px; }\n' +
'\n' +
'.filter-bar {\n' +
'  background: #fff; border-radius: var(--radius-lg); padding: 14px 18px;\n' +
'  display: flex; flex-wrap: wrap; gap: 10px; align-items: center;\n' +
'  margin-bottom: 18px; box-shadow: var(--shadow-md); border: 1px solid var(--gray-100);\n' +
'}\n' +
'.filter-bar label { font-size: 11px; font-weight: 600; color: var(--gray-500); text-transform: uppercase; letter-spacing: .5px; }\n' +
'.filter-bar select, .filter-bar input {\n' +
'  padding: 6px 10px; border: 1px solid var(--gray-200); border-radius: 8px;\n' +
'  font-size: 12px; background: #fff; outline: none; font-family: inherit;\n' +
'  transition: var(--transition); color: var(--gray-700); max-width: 140px;\n' +
'}\n' +
'.filter-bar select:focus, .filter-bar input:focus { border-color: var(--primary); box-shadow: 0 0 0 3px rgba(79,70,229,.12); }\n' +
'.filter-bar .spacer { width: 1px; height: 24px; background: var(--gray-200); }\n' +
'\n' +
'.tab-bar {\n' +
'  display: flex; gap: 0; background: #fff; border-radius: var(--radius-lg) var(--radius-lg) 0 0;\n' +
'  box-shadow: var(--shadow-md); border: 1px solid var(--gray-100); border-bottom: none;\n' +
'  overflow: hidden; margin-bottom: 0;\n' +
'}\n' +
'.tab-btn {\n' +
'  padding: 12px 20px; font-size: 13px; font-weight: 500; cursor: pointer;\n' +
'  border: none; background: transparent; font-family: inherit;\n' +
'  color: var(--gray-400); transition: var(--transition);\n' +
'  border-bottom: 2px solid transparent; position: relative;\n' +
'}\n' +
'.tab-btn:hover { color: var(--gray-600); background: var(--gray-50); }\n' +
'.tab-btn.active { color: var(--primary); border-bottom-color: var(--primary); background: var(--primary-light); }\n' +
'.tab-content {\n' +
'  background: #fff; border-radius: 0 0 var(--radius-lg) var(--radius-lg);\n' +
'  box-shadow: var(--shadow-md); border: 1px solid var(--gray-100); border-top: none;\n' +
'  padding: 20px; display: none; margin-bottom: 18px;\n' +
'}\n' +
'.tab-content.active { display: block; }\n' +
'\n' +
'.chart-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }\n' +
'@media (max-width: 960px) { .chart-grid { grid-template-columns: 1fr; } }\n' +
'@media (min-width: 1200px) { .tab-content .chart-grid { grid-template-columns: 1fr 1fr; } }\n' +
'#tabMatCat .chart-grid { grid-template-columns: 1fr 1fr 1fr; }\n' +
'@media (max-width: 1100px) { #tabMatCat .chart-grid { grid-template-columns: 1fr 1fr; } }\n' +
'.chart-box { position: relative; height: 280px; }\n' +
'.chart-box.tall { height: 360px; }\n' +
'.chart-box h3 { font-size: 14px; font-weight: 600; color: var(--gray-700); margin-bottom: 10px; }\n' +
'\n' +
'.summary-table { width: 100%; border-collapse: collapse; font-size: 12px; }\n' +
'.summary-table th {\n' +
'  text-align: left; padding: 8px 10px; border-bottom: 2px solid var(--gray-200);\n' +
'  font-weight: 600; color: var(--gray-500); font-size: 11px; text-transform: uppercase;\n' +
'}\n' +
'.summary-table td { padding: 8px 10px; border-bottom: 1px solid var(--gray-50); }\n' +
'.summary-table tr:hover td { background: rgba(79,70,229,.03); }\n' +
'.summary-table .bar-bg { width: 100px; height: 5px; background: var(--gray-100); border-radius: 3px; overflow: hidden; display: inline-block; vertical-align: middle; margin-right: 6px; }\n' +
'.summary-table .bar-fill { height: 100%; border-radius: 3px; background: linear-gradient(90deg, var(--primary), #818cf8); }\n' +
'\n' +
'.detail-wrap {\n' +
'  background: #fff; border-radius: var(--radius-lg);\n' +
'  box-shadow: var(--shadow-md); border: 1px solid var(--gray-100); overflow: hidden; margin-bottom: 18px;\n' +
'}\n' +
'.detail-toolbar {\n' +
'  padding: 12px 18px; display: flex; align-items: center; gap: 12px;\n' +
'  border-bottom: 1px solid var(--gray-100); background: var(--gray-50); flex-wrap: wrap;\n' +
'}\n' +
'.detail-toolbar label { font-size: 12px; font-weight: 500; color: var(--gray-500); }\n' +
'.detail-toolbar select { padding: 5px 10px; border: 1px solid var(--gray-200); border-radius: 6px; font-size: 12px; background: #fff; outline: none; }\n' +
'.detail-toolbar .col-count { font-size: 12px; color: var(--gray-400); margin-left: auto; }\n' +
'.table-scroll { overflow-x: auto; max-height: 600px; overflow-y: auto; }\n' +
'table.detail { width: 100%; border-collapse: collapse; font-size: 12px; }\n' +
'table.detail thead { background: var(--gray-50); position: sticky; top: 0; z-index: 2; }\n' +
'table.detail th {\n' +
'  padding: 8px 10px; text-align: left; font-weight: 600; color: var(--gray-500);\n' +
'  border-bottom: 2px solid var(--gray-200); white-space: nowrap; font-size: 11px; cursor: pointer; user-select: none;\n' +
'}\n' +
'table.detail th:hover { color: var(--primary); }\n' +
'table.detail td { padding: 7px 10px; border-bottom: 1px solid var(--gray-50); white-space: nowrap; max-width: 200px; overflow: hidden; text-overflow: ellipsis; }\n' +
'table.detail tbody tr:hover td { background: rgba(79,70,229,.03); }\n' +
'\n' +
'.pagination {\n' +
'  display: flex; justify-content: space-between; align-items: center;\n' +
'  padding: 12px 18px; border-top: 1px solid var(--gray-100);\n' +
'  font-size: 12px; color: var(--gray-500);\n' +
'}\n' +
'.pagination .pages { display: flex; gap: 4px; }\n' +
'.pagination .pages button {\n' +
'  min-width: 32px; height: 32px; border: 1px solid var(--gray-200); border-radius: 6px;\n' +
'  background: #fff; cursor: pointer; font-size: 12px; font-family: inherit;\n' +
'  transition: var(--transition); color: var(--gray-600);\n' +
'}\n' +
'.pagination .pages button:hover { border-color: var(--primary); color: var(--primary); background: var(--primary-light); }\n' +
'.pagination .pages button.active { background: var(--primary); color: #fff; border-color: var(--primary); }\n' +
'.pagination .pages button:disabled { opacity: .4; cursor: not-allowed; }\n' +
'.upload-bar{background:#fff;border-radius:var(--radius-lg);padding:12px 18px;display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-bottom:18px;box-shadow:var(--shadow-md);border:1px solid var(--gray-100)}\n' +
'.sort-btn{padding:4px 10px;border:1px solid var(--gray-200);border-radius:6px;background:#fff;cursor:pointer;font-size:14px;font-family:inherit;transition:var(--transition);color:var(--gray-400);line-height:1}\n' +
'.sort-btn:hover{border-color:var(--primary);color:var(--primary)}\n' +
'.sort-btn.active{background:var(--primary);color:#fff;border-color:var(--primary)}\n' +
'th.dragging{opacity:.4}\n' +
'th.drag-over{border-left:3px solid var(--primary)!important}\n' +
'.col-panel{position:absolute;top:100%;left:0;z-index:50;background:#fff;border:1px solid var(--gray-200);border-radius:8px;box-shadow:var(--shadow-lg);max-height:320px;overflow-y:auto;min-width:360px;padding:8px}\n' +
'.col-panel-inner{display:flex;flex-wrap:wrap;gap:4px}\n' +
'.col-cb{display:flex;align-items:center;gap:4px;padding:3px 8px;font-size:12px;cursor:pointer;border-radius:4px;white-space:nowrap;width:50%}\n' +
'.col-cb:hover{background:var(--gray-50)}\n' +
'.col-cb input{accent-color:var(--primary)}\n' +
'.context-menu{position:fixed;z-index:999;background:#fff;border:1px solid var(--gray-200);border-radius:8px;box-shadow:var(--shadow-lg);min-width:140px;padding:4px 0}\n' +
'.context-menu-item{padding:8px 14px;font-size:13px;cursor:pointer;white-space:nowrap}\n' +
'.context-menu-item:hover{background:var(--gray-50);color:var(--primary)}\n' +
'.btn-filter {\n' +
'  padding: 6px 14px; border: none; border-radius: 6px; font-size: 12px;\n' +
'  font-weight: 500; font-family: inherit; cursor: pointer;\n' +
'  background: var(--primary); color: #fff; transition: var(--transition);\n' +
'}\n' +
'.btn-filter:hover { background: var(--primary-dark); }\n' +
'.btn-filter.outline { background: #fff; border: 1px solid var(--gray-300); color: var(--gray-600); }\n' +
'.btn-filter.outline:hover { border-color: var(--primary); color: var(--primary); }\n' +
'.track-kpi{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-bottom:14px}\n' +
'.track-kpi-card{background:#fff;border-radius:var(--radius-lg);padding:14px 16px;box-shadow:var(--shadow-md);border:1px solid var(--gray-100);display:flex;align-items:center;gap:12px;border-left:4px solid var(--gray-300)}\n' +
'.track-kpi-card .kpi-icon{font-size:26px;line-height:1}\n' +
'.track-kpi-card .track-kpi-num{font-size:22px;font-weight:700}\n' +
'.track-kpi-card.pending{border-left-color:#f59e0b}\n' +
'.track-kpi-card.progress{border-left-color:#3b82f6}\n' +
'.track-kpi-card.done{border-left-color:#22c55e}\n' +
'.track-kpi-card.hold{border-left-color:#94a3b8}\n' +
'.track-kpi-card.avg{border-left-color:#8b5cf6}\n' +
'.track-level-summary{display:flex;align-items:center;gap:10px;margin-bottom:14px;padding:10px 16px;background:#fff;border-radius:var(--radius);border:1px solid var(--gray-100)}\n' +
'.level-badge{display:inline-flex;align-items:center;gap:4px;padding:3px 12px;border-radius:12px;font-size:12px;font-weight:600}\n' +
'.level-badge.high{background:#fef2f2;color:#dc2626;border:1px solid #fecaca}\n' +
'.level-badge.med{background:#fffbeb;color:#d97706;border:1px solid #fde68a}\n' +
'.level-badge.low{background:#f0fdf4;color:#16a34a;border:1px solid #bbf7d0}\n' +
'.track-toolbar{background:#fff;border-radius:var(--radius-lg);padding:10px 16px;display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-bottom:14px;box-shadow:var(--shadow-md);border:1px solid var(--gray-100)}\n' +
'.track-table-scroll{overflow-x:auto;max-height:520px;overflow-y:auto}\n' +
'.track-table td.amt{text-align:right;font-variant-numeric:tabular-nums}\n' +
'.track-table td.editable{cursor:pointer}\n' +
'.track-table td.editable:hover{background:rgba(79,70,229,.05)}\n' +
'.track-inline-select{padding:3px 6px;border:1px solid var(--gray-200);border-radius:4px;font-size:12px;background:#fff;outline:none;font-family:inherit}\n' +
'.track-inline-text,.track-inline-num,.track-inline-date{padding:3px 6px;border:1px solid var(--primary);border-radius:4px;font-size:12px;outline:none;font-family:inherit;background:#fff}\n' +
'.progress-bar{display:inline-block;width:70px;height:7px;background:var(--gray-100);border-radius:4px;overflow:hidden;vertical-align:middle}\n' +
'.progress-fill{height:100%;border-radius:4px;background:linear-gradient(90deg,#4f46e5,#22c55e);transition:width .3s}\n' +
'.track-btn-save,.track-btn-del{background:0 0;border:none;cursor:pointer;font-size:15px;padding:2px 4px;border-radius:4px;line-height:1}\n' +
'.track-btn-del:hover{background:#fef2f2}\n' +
'.stage-editor-row{background:var(--gray-50)}\n' +
'.stage-editor-inner{padding:10px 20px 14px}\n' +
'.stage-editor-inner table{width:100%;border-collapse:collapse;font-size:12px}\n' +
'.stage-editor-inner th{text-align:left;padding:6px 8px;border-bottom:2px solid var(--gray-200);font-weight:600;color:var(--gray-500);font-size:11px}\n' +
'.stage-input{padding:4px 8px;border:1px solid var(--gray-200);border-radius:4px;font-size:12px;width:100%;outline:none;font-family:inherit}\n' +
'.stage-input:focus{border-color:var(--primary);box-shadow:0 0 0 2px rgba(79,70,229,.1)}\n' +
'th.cb-col,td.cb-col{width:40px;text-align:center;vertical-align:middle}\n' +
'td.cb-col input{accent-color:var(--primary);cursor:pointer}\n' +
'.track-unmatched{opacity:.6}\n' +
'.track-unmatched:hover{opacity:.85}\n' +
'.unmatched-tag{font-size:11px;color:#f59e0b;font-weight:500;white-space:nowrap}\n' +
'.modal-overlay{position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.3);display:flex;align-items:center;justify-content:center;backdrop-filter:blur(2px)}\n' +
'.modal-content{background:#fff;border-radius:var(--radius-lg);min-width:560px;max-width:720px;box-shadow:var(--shadow-lg);overflow:hidden}\n' +
'.modal-header{display:flex;justify-content:space-between;align-items:center;padding:14px 18px;border-bottom:1px solid var(--gray-100);font-weight:600;font-size:14px;color:var(--gray-700)}\n' +
'.modal-header button{background:0 0;border:none;font-size:18px;cursor:pointer;color:var(--gray-400);padding:0 4px;line-height:1}\n' +
'.modal-body{padding:14px 18px;max-height:420px;overflow-y:auto}\n' +
'.modal-body .summary-table tfoot td{padding:10px;border-top:2px solid var(--gray-200);font-size:13px}\n' +
'#textEditorArea:focus{border-color:var(--primary);box-shadow:0 0 0 3px rgba(79,70,229,.12)}';

let EXPORT_JS;

// === MAIN APP CODE (wrapped for .toString() export) ===
var APP_FN = function() {
var COL_META = [
  {key:'matchCol',cn:'匹配列'},{key:'assessMech',cn:'考核机制'},{key:'dept',cn:'责任部门'},{key:'person',cn:'责任人'},
  {key:'maxAge',cn:'最大合理库龄',num:true},{key:'price',cn:'单价',num:true},{key:'overdueQty',cn:'超期数量',num:true},
  {key:'overdueAmtBucket',cn:'超期金额(左闭右开)'},{key:'overdueAmt',cn:'超期金额',num:true},{key:'totalAmt',cn:'总金额',num:true},
  {key:'slowAmt',cn:'滞料金额',num:true},{key:'staleAmt',cn:'呆料金额',num:true},{key:'matCat',cn:'物料类别'},
  {key:'matCategory',cn:'物料分类'},{key:'strategy',cn:'战略'},{key:'eol',cn:'EOL',num:true},{key:'salesCat',cn:'销管分类'},{key:'prodLine',cn:'产品线'},
  {key:'matCode',cn:'物料编码'},{key:'matName',cn:'物料名称'},{key:'spec',cn:'规格型号'},{key:'matProp',cn:'物料属性'},
  {key:'matGroup',cn:'物料分组'},{key:'warehouse',cn:'仓库'},{key:'invStatus',cn:'库存状态'},{key:'unit',cn:'库存单位'},
  {key:'qty',cn:'数量(库存)',num:true},
  {key:'q0_15',cn:'0-15(Q)',num:true},{key:'q15_30',cn:'15-30(Q)',num:true},{key:'q30_45',cn:'30-45(Q)',num:true},
  {key:'q45_60',cn:'45-60(Q)',num:true},{key:'q60_90',cn:'60-90(Q)',num:true},{key:'q90_180',cn:'90-180(Q)',num:true},
  {key:'q180_360',cn:'180-360(Q)',num:true},{key:'q360_720',cn:'360-720(Q)',num:true},{key:'q720',cn:'>720(Q)',num:true},
  {key:'a0_15',cn:'0-15(A)',num:true},{key:'a15_30',cn:'15-30(A)',num:true},{key:'a30_45',cn:'30-45(A)',num:true},
  {key:'a45_60',cn:'45-60(A)',num:true},{key:'a60_90',cn:'60-90(A)',num:true},{key:'a90_180',cn:'90-180(A)',num:true},
  {key:'a180_360',cn:'180-360(A)',num:true},{key:'a360_720',cn:'360-720(A)',num:true},{key:'a720',cn:'>720(A)',num:true}
];
var NUM_KEYS = COL_META.filter(c=>c.num).map(c=>c.key);
var Q_KEYS = ['q0_15','q15_30','q30_45','q45_60','q60_90','q90_180','q180_360','q360_720','q720'];
var Q_LABELS = ['0-15','15-30','30-45','45-60','60-90','90-180','180-360','360-720','>720'];

var rawData = [];
var filtered = [];
var currentPage = 1;
var PAGE_SIZE = 50;
var PRIORITY_KEYS = ['prodLine','matCode','matName','staleAmt','slowAmt','totalAmt','qty','matCategory','videoProduct'];
var visibleCols = [...PRIORITY_KEYS, ...COL_META.map(c=>c.key).filter(k => !PRIORITY_KEYS.includes(k))];
var charts = {};

// Tracking globals
var trackingData = [];
var checkedIds = new Set();
var TRACK_PAGE_SIZE = 10;
var trackCurrentPage = 1;
var trackSortKey = 'staleAmt';
var trackSortDir = 'desc';

function getLevel(amt) {
  var n = safeNum(amt);
  if (n >= 100000) return { key: '高', label: '高优先级', color: '#dc2626', bg: '#fef2f2', icon: '🔴' };
  if (n >= 50000)  return { key: '中', label: '中优先级', color: '#d97706', bg: '#fffbeb', icon: '🟡' };
  return { key: '低', label: '低优先级', color: '#16a34a', bg: '#f0fdf4', icon: '🟢' };
}

function getMatCategory(code) {
  if (!code) return '其他';
  if (code.startsWith('10')) return '成品';
  if (code.startsWith('20')) return '半成品';
  if (code.startsWith('30')) return '原材料';
  return '其他';
}

var VIDEO_PRODUCTS = ['8830','8832','9806','9830','9831','9622','9620','9842','9851','9805','9330','9803 Pro','9802G','9802F'];

function getVideoProduct(matCode, matName) {
  var cat = getMatCategory(matCode);
  if (cat !== '成品' && cat !== '半成品') return '';
  var text = (matCode || '') + (matName || '');
  if (text.indexOf('套装') >= 0) {
    var found = [];
    for (var i = 0; i < VIDEO_PRODUCTS.length; i++)
      if (text.indexOf(VIDEO_PRODUCTS[i]) >= 0) found.push(VIDEO_PRODUCTS[i]);
    return found.length ? found.join('+') : '其他';
  }
  for (var i = 0; i < VIDEO_PRODUCTS.length; i++)
    if (text.indexOf(VIDEO_PRODUCTS[i]) >= 0) return VIDEO_PRODUCTS[i];
  return '其他';
}

// === Supabase ===
var SUPABASE_URL = 'https://gdmpcccyoklahbjvlzba.supabase.co';
var SUPABASE_ANON_KEY = 'sb_publishable_IsVJqGZpkNTsvsDFJDJsKA__cCOgO4r';
var supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

var BATCH_SIZE = 500;
var UPLOAD_SESSION = null;

async function supabaseSaveRawData(data, onProgress) {
  UPLOAD_SESSION = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  var totalBatches = Math.ceil(data.length / BATCH_SIZE);
  for (var i = 0; i < data.length; i += BATCH_SIZE) {
    var batchNum = Math.floor(i / BATCH_SIZE) + 1;
    var batch = data.slice(i, i + BATCH_SIZE);
    var result = await supabase.from('inventory_data').insert({ raw_data: batch, file_name: UPLOAD_SESSION, row_count: batch.length });
    if (result.error) throw new Error('保存到云端失败: ' + result.error.message + ' (第' + batchNum + '/' + totalBatches + '批)');
    if (onProgress) onProgress(batchNum, totalBatches);
  }
}
async function supabaseLoadRawData() {
  var metaResult = await supabase.from('inventory_data').select('id, file_name').order('id', { ascending: true });
  if (metaResult.error) throw new Error('从云端加载失败: ' + metaResult.error.message);
  if (!metaResult.data || !metaResult.data.length) return null;
  var groups = {};
  for (var r = 0; r < metaResult.data.length; r++) {
    var fn = metaResult.data[r].file_name || 'unknown';
    if (!groups[fn]) groups[fn] = [];
    groups[fn].push(metaResult.data[r].id);
  }
  var bestSession = null;
  var bestMaxId = -1;
  for (var fn in groups) {
    var maxId = groups[fn].reduce(function(m, id) { return Math.max(m, id); }, -1);
    if (maxId > bestMaxId) { bestMaxId = maxId; bestSession = fn; }
  }
  UPLOAD_SESSION = bestSession;
  var dataResult = await supabase.from('inventory_data').select('raw_data, id').eq('file_name', bestSession).order('id', { ascending: true });
  if (dataResult.error) throw new Error('从云端加载数据失败: ' + dataResult.error.message);
  var merged = [];
  for (var r = 0; r < dataResult.data.length; r++) {
    if (dataResult.data[r].raw_data && dataResult.data[r].raw_data.length) {
      merged = merged.concat(dataResult.data[r].raw_data);
    }
  }
  return merged.length ? merged : null;
}

async function trackingGetAll() {
  var result = await supabase.from('tracking').select('*').order('track_id', { ascending: true });
  if (result.error) throw new Error('加载跟踪数据失败: ' + result.error.message);
  return (result.data || []).map(fromDB);
}
async function trackingAdd(item) {
  var result = await supabase.from('tracking').insert(toDB(item)).select();
  if (result.error) throw new Error('添加跟踪项失败: ' + result.error.message);
  if (result.data && result.data.length) return result.data[0].track_id;
  return null;
}
async function trackingUpdate(item) {
  var result = await supabase.from('tracking').update(toDB(item)).eq('track_id', item.track_id);
  if (result.error) throw new Error('更新跟踪项失败: ' + result.error.message);
}
async function trackingRemove(trackId) {
  var result = await supabase.from('tracking').delete().eq('track_id', trackId);
  if (result.error) throw new Error('删除跟踪项失败: ' + result.error.message);
}
async function trackingGetByMatCode(matCode) {
  if (!matCode) return null;
  var result = await supabase.from('tracking').select('*').eq('mat_code', matCode).limit(1);
  if (result.error) throw new Error('查询跟踪项失败: ' + result.error.message);
  if (result.data && result.data.length) return fromDB(result.data[0]);
  return null;
}

function toDB(t) {
  return {
    track_id: t.trackId, mat_code: t.matCode, source: t.source,
    prod_line: t.prodLine, mat_cat: t.matCat, mat_name: t.matName, match_col: t.matchCol,
    stale_amt: t.staleAmt, slow_amt: t.slowAmt, overdue_amt: t.overdueAmt, total_amt: t.totalAmt, qty: t.qty,
    was_matched: t.wasMatched, status: t.status, progress: t.progress,
    expected_close_date: t.expectedCloseDate, stage_persons: t.stagePersons,
    cause_analysis: t.causeAnalysis, blocker: t.blocker, remark: t.remark, updated_date: t.updatedDate
  };
}
function fromDB(r) {
  if (!r) return null;
  return {
    trackId: r.track_id, matCode: r.mat_code, source: r.source,
    prodLine: r.prod_line, matCat: r.mat_cat, matName: r.mat_name, matchCol: r.match_col,
    staleAmt: r.stale_amt, slowAmt: r.slow_amt, overdueAmt: r.overdue_amt, totalAmt: r.total_amt, qty: r.qty,
    wasMatched: r.was_matched, status: r.status, progress: r.progress,
    expectedCloseDate: r.expected_close_date, stagePersons: r.stage_persons,
    causeAnalysis: r.cause_analysis, blocker: r.blocker, remark: r.remark, updatedDate: r.updated_date
  };
}

var safeNum = v => { var n = parseFloat(v); return isNaN(n) ? 0 : n; };
var sortKey = '';
var sortDir = '';

function toggleSort(key) {
  if (sortKey !== key) {
    sortKey = key;
    sortDir = 'asc';
  } else {
    if (sortDir === '') sortDir = 'asc';
    else if (sortDir === 'asc') sortDir = 'desc';
    else { sortDir = ''; sortKey = ''; }
  }
  currentPage = 1;
  renderDetail();
}

async function handleFileUpload(event) {
  var file = event.target.files[0];
  if (!file) return;
  document.getElementById('loadingOverlay').style.display = 'flex';
  document.getElementById('loadText').textContent = '正在解析数据...';
  document.getElementById('loadProgress').textContent = '';
  var status = document.getElementById('uploadStatus');
  status.textContent = '正在解析...';
  try {
    var buf = await file.arrayBuffer();
    var wb = XLSX.read(new Uint8Array(buf), { type: 'array' });
    var ws = wb.Sheets[wb.SheetNames[0]];
    var json = XLSX.utils.sheet_to_json(ws, { defval: '' });
    json = json.map((row, i) => {
      var d = { id: i + 1 };
      COL_META.forEach(col => { d[col.key] = ''; });
      Object.keys(row).forEach(h => {
        var nh = h.replace(/[（]/g, '(').replace(/[）]/g, ')').trim();
        var col = COL_META.find(c => c.cn === nh);
        var key = col ? col.key : nh;
        if (COL_META.some(c => c.key === key)) d[key] = row[h];
      });
      return d;
    });
    if (json.length < 2) throw new Error('数据不足');
    rawData = json;
    filtered = [...rawData];
    document.getElementById('loadProgress').textContent = rawData.length + ' 条记录';
    document.getElementById('loadingOverlay').style.display = 'none';
    event.target.value = '';
    buildFilterOptions();
    applyFilters();
    renderColCheckboxes();
    await syncTrackingFromRawData();
    renderAll();
    status.textContent = '⏳ 正在同步到云端... 0/' + Math.ceil(rawData.length / BATCH_SIZE);
    supabaseSaveRawData(rawData, function(done, total) {
      status.textContent = '⏳ 正在同步到云端... ' + done + '/' + total;
    }).then(function() {
      status.textContent = '✅ 已加载 ' + rawData.length + ' 条数据 (已同步到云端)';
    }).catch(function(e) {
      status.textContent = '⚠️ 已加载 ' + rawData.length + ' 条数据，但同步到云端失败: ' + e.message;
    });
    return;
  } catch (e) {
    status.textContent = '❌ ' + e.message;
  }
  document.getElementById('loadingOverlay').style.display = 'none';
  event.target.value = '';
}

async function loadDemo() {
  document.getElementById('loadingOverlay').style.display = 'flex';
  document.getElementById('loadText').textContent = '正在加载示例数据...';
  document.getElementById('loadProgress').textContent = '';
  var status = document.getElementById('uploadStatus');
  status.textContent = '加载示例数据...';
  try {
    var resp = await fetch('data_full.json');
    rawData = await resp.json();
  } catch {
    rawData = generateMock();
  }
  filtered = [...rawData];
  document.getElementById('loadProgress').textContent = rawData.length + ' 条记录';
  document.getElementById('loadingOverlay').style.display = 'none';
  buildFilterOptions();
  applyFilters();
  renderAll();
  renderColCheckboxes();
  await syncTrackingFromRawData();
  renderAll();
  status.textContent = '⏳ 正在同步到云端... 0/' + Math.ceil(rawData.length / BATCH_SIZE);
  supabaseSaveRawData(rawData, function(done, total) {
    status.textContent = '⏳ 正在同步到云端... ' + done + '/' + total;
  }).then(function() {
    status.textContent = '✅ 已加载 ' + rawData.length + ' 条示例数据 (已同步到云端)';
  }).catch(function(e) {
    status.textContent = '⚠️ 已加载 ' + rawData.length + ' 条示例数据，但同步到云端失败: ' + e.message;
  });
}

function renderEmptyState() {
  document.getElementById('kpiRow').innerHTML =
    '<div class="kpi-card" style="grid-column:1/-1;text-align:center;padding:40px 18px;">' +
    '<div style="font-size:48px;margin-bottom:12px;">📂</div>' +
    '<div style="font-size:16px;font-weight:600;color:var(--gray-600);">上传数据开始分析</div>' +
    '<div style="font-size:13px;color:var(--gray-400);margin-top:6px;">支持 .csv / .xlsx / .xls 格式</div>' +
    '</div>';

  document.getElementById('hdrSku').textContent = '0';
  document.getElementById('hdrQty').textContent = '0';
  document.getElementById('hdrAmt').textContent = '¥0';
  var hdrTotal = document.getElementById('hdrTotalAmt');
  if (hdrTotal) hdrTotal.textContent = '¥0';
  var hdrSlow = document.getElementById('hdrSlowAmt');
  if (hdrSlow) hdrSlow.textContent = '¥0';

  ['prodLineTable','whTable','matCatTable','top10Table','deptTable'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = '<div style="text-align:center;padding:40px;color:var(--gray-400);">上传数据后自动生成</div>';
  });

  document.getElementById('detailHead').innerHTML = '<tr><th class="cb-col">☐</th><th>#</th></tr>';
  document.getElementById('detailBody').innerHTML = '';
  document.getElementById('pageInfo').textContent = '共 0 条';
  document.getElementById('pageBtns').innerHTML = '';
}

async function init() {
  var sel = document.getElementById('colSelector');
  COL_META.forEach(function(c) {
    var o = document.createElement('option');
    o.value = c.key; o.textContent = c.cn;
    o.selected = true; sel.appendChild(o);
  });
  document.getElementById('colCount').textContent = '已选 ' + COL_META.length + ' / ' + COL_META.length + ' 列';

  document.querySelectorAll('.tab-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
      document.querySelectorAll('.tab-content').forEach(function(t) { t.classList.remove('active'); });
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });

  var hasData = false;

  if (window.__EMBEDDED_DATA__ && window.__EMBEDDED_DATA__.length) {
    rawData = window.__EMBEDDED_DATA__;
    try {
      await supabaseSaveRawData(rawData);
      hasData = true;
    } catch(e) {
      document.getElementById('loadProgress').textContent = '⚠️ ' + e.message;
    }
  }

  if (window.__EMBEDDED_TRACKING__ && window.__EMBEDDED_TRACKING__.length) {
    var existing = await trackingGetAll();
    for (var t of window.__EMBEDDED_TRACKING__) {
      var dup = existing.find(function(e) { return e.matCode === t.matCode; });
      if (!dup) await trackingAdd(t);
    }
    await loadTrackingData();
  }

  if (!hasData) {
    try {
      var cached = await supabaseLoadRawData();
      if (cached && cached.length) {
        rawData = cached;
        hasData = true;
        document.getElementById('loadProgress').textContent = rawData.length + ' 条记录 (云端)';
      }
    } catch(e) {
      document.getElementById('loadProgress').textContent = '⚠️ 云端连接失败，请稍后重试';
    }
  }

  document.getElementById('loadingOverlay').style.display = 'none';

  if (hasData) {
    filtered = [...rawData];
    buildFilterOptions();
    applyFilters();
    renderAll();
    await syncTrackingFromRawData();
    renderTracking();
  } else {
    rawData = [];
    filtered = [];
    document.getElementById('loadText').textContent = '正在初始化系统...';
    document.getElementById('loadProgress').textContent = '';
    renderEmptyState();
  }

  renderColCheckboxes();
  try { await loadTrackingData(); renderTracking(); } catch(e) {}
  document.addEventListener('click', function() { document.getElementById('contextMenu').style.display = 'none'; });
}

function exportShareVersion() {
  if (!rawData || !rawData.length) { alert('暂无数据可供导出'); return; }

  document.getElementById('loadingOverlay').style.display = 'flex';
  document.getElementById('loadText').textContent = '正在生成分享版...';
  document.getElementById('loadProgress').textContent = '';

  try {
    var dataJson = JSON.stringify(rawData);
    var trackingJson = trackingData.length ? JSON.stringify(trackingData.map(function(t) { var o = Object.assign({}, t); delete o.trackId; return o; })) : 'null';
    var html = '<!DOCTYPE html>\n' + document.documentElement.outerHTML;

    // Inline CSS/JS from templates (available in original, not in exported file)
    if (typeof EXPORT_CSS !== 'undefined') {
      html = html.replace(/<link rel="stylesheet" href="style\.css"[^>]*>/i, '<style>' + EXPORT_CSS + '</style>');
    }
    if (typeof EXPORT_JS !== 'undefined') {
      html = html.replace(/<script src="app\.js"><\/script>/i, '<script>' + EXPORT_JS + '<\/script>');
    }

    // Replace embedded data + tracking assignments
    var m = html.match(/window\.__EMBEDDED_DATA__\s*=\s*.+?;\n\s*window\.__EMBEDDED_TRACKING__\s*=\s*.+?;\n/);
    if (m && m[0]) {
      html = html.replace(m[0], 'window.__EMBEDDED_DATA__ = ' + dataJson + ';\nwindow.__EMBEDDED_TRACKING__ = ' + trackingJson + ';\n');
    }

    var blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = '呆滞库存分析系统5.0_分享版.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (e) {
    alert('导出失败: ' + e.message);
  }

  document.getElementById('loadingOverlay').style.display = 'none';
}

function buildFilterOptions() {
  var uniq = function(key) { return [...new Set(rawData.map(function(d) { return d[key]; }))].filter(Boolean).sort(); };
  var setOptions = function(id, vals) {
    var el = document.getElementById(id);
    el.innerHTML = '<option value="">全部</option>';
    vals.forEach(function(v) { var o = document.createElement('option'); o.value = v; o.textContent = v; el.appendChild(o); });
  };
  setOptions('fProdLine', uniq('prodLine'));
  setOptions('fWarehouse', uniq('warehouse'));
  setOptions('fMatCat', uniq('matCat'));
  setOptions('fInvStatus', uniq('invStatus'));

  // Video product options
  var prodEl = document.getElementById('fVideoProduct');
  if (prodEl) {
    prodEl.innerHTML = '<option value="">全部</option>';
    VIDEO_PRODUCTS.forEach(function(v) { var o = document.createElement('option'); o.value = v; o.textContent = v; prodEl.appendChild(o); });
    var o2 = document.createElement('option'); o2.value = '其他'; o2.textContent = '其他'; prodEl.appendChild(o2);
  }
}

function applyFilters() {
  var pl = document.getElementById('fProdLine').value;
  var wh = document.getElementById('fWarehouse').value;
  var mc = document.getElementById('fMatCat').value;
  var st = document.getElementById('fInvStatus').value;
  var sg = document.getElementById('fStrategy').value;
  var sq = document.getElementById('fSearch').value.trim().toLowerCase();
  var minAmt = parseFloat(document.getElementById('fMinAmt').value) || 0;
  var matCategory = document.getElementById('fMatCategory').value;
  var isVideoLine = pl === '专业视频产品线';
  var fVideoEl = document.getElementById('fVideoProduct');
  var videoProd = isVideoLine ? (fVideoEl ? fVideoEl.value : '') : '';

  // 联动显示/隐藏产品下拉
  ['spacerVideoProd','lblVideoProd','fVideoProduct'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.style.display = isVideoLine ? '' : 'none';
  });

  filtered = rawData.filter(function(d) {
    if (pl && d.prodLine !== pl) return false;
    if (wh && d.warehouse !== wh) return false;
    if (mc && d.matCat !== mc) return false;
    if (st && d.invStatus !== st) return false;
    if (sg !== '' && String(d.strategy) !== sg) return false;
    if (sq && !d.matCode.toLowerCase().includes(sq) && !d.matName.toLowerCase().includes(sq)) return false;
    if (minAmt && safeNum(d.staleAmt) < minAmt) return false;
    if (matCategory && getMatCategory(d.matCode) !== matCategory) return false;
    if (videoProd && getVideoProduct(d.matCode, d.matName) !== videoProd) return false;
    return true;
  });
  currentPage = 1;
  renderAll();
}

function resetFilters() {
  ['fProdLine','fWarehouse','fMatCat','fInvStatus','fStrategy','fMatCategory','fVideoProduct'].forEach(function(id) { var el = document.getElementById(id); if (el) el.value = ''; });
  document.getElementById('fSearch').value = '';
  document.getElementById('fMinAmt').value = '';
  applyFilters();
}

function renderAll() {
  renderKPI();
  renderProdLine();
  renderWarehouse();
  renderMatCat();
  renderTop10();
  renderDept();
  renderTracking();
  renderVideoProduct();
  renderDetail();
}

function fmt(v) { return typeof v === 'number' ? v.toLocaleString() : v; }
function fmtMoney(v) { return '¥' + safeNum(v).toLocaleString(); }

function renderKPI() {
  var totalSku = filtered.length;
  var totalQty = filtered.reduce(function(s, d) { return s + safeNum(d.qty); }, 0);
  var totalStaleAmt = filtered.reduce(function(s, d) { return s + safeNum(d.staleAmt); }, 0);
  var totalTotalAmt = filtered.reduce(function(s, d) { return s + safeNum(d.totalAmt); }, 0);
  var totalSlowAmt = filtered.reduce(function(s, d) { return s + safeNum(d.slowAmt); }, 0);
  var totalOverdueAmt = filtered.reduce(function(s, d) { return s + safeNum(d.overdueAmt); }, 0);
  var prodLineCount = new Set(filtered.map(function(d) { return d.prodLine; })).size;

  document.getElementById('hdrSku').textContent = totalSku.toLocaleString();
  document.getElementById('hdrQty').textContent = totalQty.toLocaleString();
  document.getElementById('hdrAmt').textContent = fmtMoney(totalStaleAmt);
  var hdrTotal = document.getElementById('hdrTotalAmt');
  if (hdrTotal) hdrTotal.textContent = fmtMoney(totalTotalAmt);
  var hdrSlow = document.getElementById('hdrSlowAmt');
  if (hdrSlow) hdrSlow.textContent = fmtMoney(totalSlowAmt);

  document.getElementById('kpiRow').innerHTML =
    '<div class="kpi-card"><div class="kpi-lbl">SKU 总数</div><div class="kpi-val">' + totalSku.toLocaleString() + '</div><div class="kpi-sub">条记录</div></div>' +
    '<div class="kpi-card"><div class="kpi-lbl">库存总数量</div><div class="kpi-val">' + totalQty.toLocaleString() + '</div><div class="kpi-sub">件</div></div>' +
    '<div class="kpi-card"><div class="kpi-lbl">库存总金额</div><div class="kpi-val">' + fmtMoney(totalTotalAmt) + '</div><div class="kpi-sub">成本价</div></div>' +
    '<div class="kpi-card"><div class="kpi-lbl">呆料金额</div><div class="kpi-val">' + fmtMoney(totalStaleAmt) + '</div><div class="kpi-sub">成本价</div></div>' +
    '<div class="kpi-card"><div class="kpi-lbl">滞料金额</div><div class="kpi-val">' + fmtMoney(totalSlowAmt) + '</div><div class="kpi-sub">成本价</div></div>' +
    '<div class="kpi-card"><div class="kpi-lbl">超期金额</div><div class="kpi-val">' + fmtMoney(totalOverdueAmt) + '</div><div class="kpi-sub">含滞料</div></div>' +
    '<div class="kpi-card"><div class="kpi-lbl">产品线数</div><div class="kpi-val">' + prodLineCount + '</div><div class="kpi-sub">条产品线</div></div>';
}

function aggregate(groupKey, amtKey, take) {
  if (amtKey === undefined) amtKey = 'staleAmt';
  if (take === undefined) take = 15;
  var map = {};
  filtered.forEach(function(d) {
    var g = d[groupKey] || '未知';
    if (!map[g]) map[g] = { key: g, amount: 0, count: 0, qty: 0 };
    map[g].amount += safeNum(d[amtKey]);
    map[g].count++;
    map[g].qty += safeNum(d.qty);
  });
  return Object.values(map).sort(function(a, b) { return b.amount - a.amount; }).slice(0, take);
}

function renderTableTo(container, data) {
  if (!data.length) { container.innerHTML = '<div style="padding:16px;color:#999;">暂无数据</div>'; return; }
  var maxVal = Math.max.apply(null, data.map(function(d) { return d.amount; }));
  var html = '<table class="summary-table"><thead><tr><th>#</th><th>项目</th><th>呆料金额</th><th>SKU数</th><th>数量</th><th>占比</th></tr></thead><tbody>';
  var totalAmt = data.reduce(function(s, d) { return s + d.amount; }, 0);
  data.forEach(function(d, i) {
    var pct = totalAmt ? ((d.amount / totalAmt) * 100).toFixed(1) : 0;
    var bw = (d.amount / maxVal) * 100;
    html += '<tr><td>' + (i + 1) + '</td><td><strong>' + d.key + '</strong></td><td>' + fmtMoney(d.amount) + '</td><td>' + d.count + '</td><td>' + d.qty.toLocaleString() + '</td><td><div class="bar-bg"><div class="bar-fill" style="width:' + Math.max(2, bw) + '%"></div></div>' + pct + '%</td></tr>';
  });
  html += '</tbody></table>';
  container.innerHTML = html;
}

function renderChart(id, labels, values, label, color) {
  if (label === undefined) label = '呆料金额';
  if (color === undefined) color = '#4f46e5';
  if (charts[id]) { charts[id].destroy(); delete charts[id]; }
  var ctx = document.getElementById(id);
  if (!ctx) return;
  charts[id] = new Chart(ctx, {
    type: 'bar',
    data: { labels: labels, datasets: [{ label: label, data: values, backgroundColor: color, borderRadius: 4, barThickness: 28 }] },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: function(ctx) { return '¥' + ctx.parsed.y.toLocaleString(); } } } },
      scales: { y: { beginAtZero: true, ticks: { callback: function(v) { return '¥' + (v / 10000).toFixed(0) + '万'; } } }, x: { grid: { display: false } } }
    }
  });
}

function renderProdLine() {
  var data = aggregate('prodLine', 'staleAmt', 15);
  renderTableTo(document.getElementById('prodLineTable'), data);
  renderChart('chartProdLine', data.map(function(d) { return d.key; }), data.map(function(d) { return d.amount; }), '呆料金额', '#4f46e5');
}

function renderWarehouse() {
  var data = aggregate('warehouse', 'staleAmt', 15);
  renderTableTo(document.getElementById('whTable'), data);
  renderChart('chartWarehouse', data.map(function(d) { return d.key; }), data.map(function(d) { return d.amount; }), '呆料金额', '#f59e0b');
}

function renderMatCat() {
  var data = aggregate('matCat', 'staleAmt', 10);
  renderTableTo(document.getElementById('matCatTable'), data);
  renderChart('chartMatCat', data.map(function(d) { return d.key; }), data.map(function(d) { return d.amount; }), '呆料金额', '#10b981');
  renderMatCategoryPie();
}

function renderMatCategoryPie() {
  var cats = ['成品','半成品','原材料','其他'];
  var colors = { '成品': '#3b82f6', '半成品': '#f59e0b', '原材料': '#22c55e', '其他': '#94a3b8' };
  [['chartTotalPie','totalAmt'],['chartSlowPie','slowAmt']].forEach(function(pair) {
    var canvasId = pair[0], field = pair[1];
    if (charts[canvasId]) { charts[canvasId].destroy(); delete charts[canvasId]; }
    var sums = { '成品': 0, '半成品': 0, '原材料': 0, '其他': 0 };
    filtered.forEach(function(d) { var c = getMatCategory(d.matCode); if (sums[c] !== undefined) sums[c] += safeNum(d[field]); });
    var labels = [], values = [], bgColors = [];
    cats.forEach(function(k) { if (sums[k] > 0) { labels.push(k); values.push(sums[k]); bgColors.push(colors[k]); } });
    if (!values.length) return;
    var total = values.reduce(function(s, v) { return s + v; }, 0);
    var ctx = document.getElementById(canvasId);
    if (!ctx) return;
    charts[canvasId] = new Chart(ctx, {
      type: 'pie',
      data: { labels: labels, datasets: [{ data: values, backgroundColor: bgColors, borderWidth: 0 }] },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { position: 'right', labels: { font: { size: 12 } } },
          tooltip: {
            callbacks: {
              label: function(ctx2) {
                var pct = ((ctx2.parsed / total) * 100).toFixed(1);
                return ctx2.label + ': ' + fmtMoney(ctx2.parsed) + ' (' + pct + '%)';
              }
            }
          }
        }
      }
    });
  });
}

function renderDept() {
  var data = aggregate('dept', 'staleAmt', 15);
  renderTableTo(document.getElementById('deptTable'), data);
  renderChart('chartDept', data.map(function(d) { return d.key; }), data.map(function(d) { return d.amount; }), '呆料金额', '#8b5cf6');
}

function renderVideoProduct() {
  // 筛选专业视频产品线 + 成品/半成品
  var data = filtered.filter(function(d) { return d.prodLine === '专业视频产品线' && getMatCategory(d.matCode) !== '原材料'; });
  if (!data.length) {
    document.getElementById('videoProductTable').innerHTML = '<div style="padding:16px;color:#999;">暂无数据</div>';
    ['chartVideoTotalAmt','chartVideoSlowAmt'].forEach(function(id) { var c = charts[id]; if (c) { c.destroy(); delete charts[id]; } });
    return;
  }

  // 按 getVideoProduct 聚合
  var map = {};
  data.forEach(function(d) {
    var prod = getVideoProduct(d.matCode, d.matName) || '其他';
    if (!map[prod]) map[prod] = { key: prod, totalAmt: 0, slowAmt: 0, count: 0 };
    map[prod].totalAmt += safeNum(d.totalAmt);
    map[prod].slowAmt += safeNum(d.slowAmt);
    map[prod].count++;
  });
  var agg = Object.values(map).sort(function(a, b) { return b.totalAmt - a.totalAmt; });

  // 图表1: 产品库存总金额 TOP
  var chartData1 = agg.slice(0, 10);
  var labels1 = chartData1.map(function(d) { return d.key; });
  var values1 = chartData1.map(function(d) { return d.totalAmt; });
  if (charts['chartVideoTotalAmt']) { charts['chartVideoTotalAmt'].destroy(); delete charts['chartVideoTotalAmt']; }
  // 图表值标签插件
  var videoLabelPlugin = {
    afterDraw: function(chart) {
      var ctx = chart.ctx;
      var meta = chart.getDatasetMeta(0);
      ctx.font = '11px Inter, sans-serif';
      ctx.textBaseline = 'middle';
      meta.data.forEach(function(bar, i) {
        var val = chart.data.datasets[0].data[i];
        var txt = val >= 10000 ? '¥' + (val / 10000).toFixed(1) + '万' : '¥' + val.toLocaleString();
        ctx.fillStyle = '#334155';
        ctx.textAlign = 'left';
        ctx.fillText(txt, bar.x + 4, bar.y);
      });
    }
  };

  var ctx1 = document.getElementById('chartVideoTotalAmt');
  if (ctx1) {
    charts['chartVideoTotalAmt'] = new Chart(ctx1, {
      type: 'bar',
      data: { labels: labels1, datasets: [{ label: '库存总金额', data: values1, backgroundColor: ['#ef4444','#f97316','#f59e0b','#eab308','#84cc16','#22c55e','#14b8a6','#06b6d4','#3b82f6','#8b5cf6'], borderRadius: 4 }] },
      options: {
        responsive: true, maintainAspectRatio: false, indexAxis: 'y',
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: function(ctx) { return '¥' + ctx.parsed.x.toLocaleString(); } } } },
        scales: { x: { beginAtZero: true, ticks: { callback: function(v) { return '¥' + (v / 10000).toFixed(0) + '万'; } } }, y: { grid: { display: false } } },
        onClick: function(e) {
          var pts = this.getElementsAtEventForMode(e, 'index', { intersect: true });
          if (pts.length) showVideoProductDetail(this.data.labels[pts[0].index], 'totalAmt');
        }
      },
      plugins: [videoLabelPlugin]
    });
  }

  // 图表2: 产品滞料金额 TOP
  var chartData2 = [].concat(agg).sort(function(a, b) { return b.slowAmt - a.slowAmt; }).slice(0, 10);
  var labels2 = chartData2.map(function(d) { return d.key; });
  var values2 = chartData2.map(function(d) { return d.slowAmt; });
  if (charts['chartVideoSlowAmt']) { charts['chartVideoSlowAmt'].destroy(); delete charts['chartVideoSlowAmt']; }
  var ctx2 = document.getElementById('chartVideoSlowAmt');
  if (ctx2) {
    charts['chartVideoSlowAmt'] = new Chart(ctx2, {
      type: 'bar',
      data: { labels: labels2, datasets: [{ label: '滞料金额', data: values2, backgroundColor: ['#ef4444','#f97316','#f59e0b','#eab308','#84cc16','#22c55e','#14b8a6','#06b6d4','#3b82f6','#8b5cf6'], borderRadius: 4 }] },
      options: {
        responsive: true, maintainAspectRatio: false, indexAxis: 'y',
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: function(ctx) { return '¥' + ctx.parsed.x.toLocaleString(); } } } },
        scales: { x: { beginAtZero: true, ticks: { callback: function(v) { return '¥' + (v / 10000).toFixed(0) + '万'; } } }, y: { grid: { display: false } } },
        onClick: function(e) {
          var pts = this.getElementsAtEventForMode(e, 'index', { intersect: true });
          if (pts.length) showVideoProductDetail(this.data.labels[pts[0].index], 'slowAmt');
        }
      },
      plugins: [videoLabelPlugin]
    });
  }

  // 明细表
  var totalAmtAll = agg.reduce(function(s, d) { return s + d.totalAmt; }, 0);
  var html = '<table class="summary-table"><thead><tr><th>#</th><th>产品</th><th>分类</th><th class="amt">库存总金额</th><th class="amt">滞料金额</th><th class="amt">占比</th></tr></thead><tbody>';
  agg.forEach(function(d, i) {
    var pct = totalAmtAll ? ((d.totalAmt / totalAmtAll) * 100).toFixed(1) : 0;
    html += '<tr><td>' + (i + 1) + '</td><td><strong>' + d.key + '</strong></td><td>' + (VIDEO_PRODUCTS.indexOf(d.key) >= 0 ? '成品/半成品' : '其他') + '</td><td class="amt">' + fmtMoney(d.totalAmt) + '</td><td class="amt">' + fmtMoney(d.slowAmt) + '</td><td class="amt">' + pct + '%</td></tr>';
  });
  html += '</tbody></table>';
  document.getElementById('videoProductTable').innerHTML = html;
}

function renderTop10() {
  if (charts['chartTop10']) { charts['chartTop10'].destroy(); delete charts['chartTop10']; }
  var sorted = [].concat(filtered).sort(function(a, b) { return safeNum(b.staleAmt) - safeNum(a.staleAmt); }).slice(0, 10);
  var labels = sorted.map(function(d) { return d.matName; });
  var values = sorted.map(function(d) { return safeNum(d.staleAmt); });

  var ctx = document.getElementById('chartTop10');
  if (!ctx) return;
  charts['chartTop10'] = new Chart(ctx, {
    type: 'bar',
    data: { labels: labels, datasets: [{ label: '呆料金额', data: values, backgroundColor: ['#ef4444','#f97316','#f59e0b','#eab308','#84cc16','#22c55e','#14b8a6','#06b6d4','#3b82f6','#8b5cf6'], borderRadius: 4 }] },
    options: {
      responsive: true, maintainAspectRatio: false, indexAxis: 'y',
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: function(ctx) { return '¥' + ctx.parsed.x.toLocaleString(); } } } },
      scales: {
        x: { beginAtZero: true, ticks: { callback: function(v) { return '¥' + (v / 10000).toFixed(0) + '万'; } } },
        y: { grid: { display: false } }
      }
    }
  });

  var html = '<table class="summary-table"><thead><tr><th>#</th><th>物料编码</th><th>物料名称</th><th>产品线</th><th>呆料金额</th><th>数量</th></tr></thead><tbody>';
  sorted.forEach(function(d, i) {
    html += '<tr><td>' + (i+1) + '</td><td>' + d.matCode + '</td><td>' + d.matName + '</td><td>' + d.prodLine + '</td><td>' + fmtMoney(d.staleAmt) + '</td><td>' + safeNum(d.qty).toLocaleString() + '</td></tr>';
  });
  html += '</tbody></table>';
  document.getElementById('top10Table').innerHTML = html;
}

function renderDetail() {
  var data = [].concat(filtered);

  if (sortKey && sortDir) {
    data.sort(function(a, b) {
      var va = safeNum(a[sortKey]);
      var vb = safeNum(b[sortKey]);
      return sortDir === 'asc' ? va - vb : vb - va;
    });
  }

  var total = data.length;
  var totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  if (currentPage > totalPages) currentPage = totalPages;
  var start = (currentPage - 1) * PAGE_SIZE;
  var pageData = data.slice(start, start + PAGE_SIZE);

  var thead = document.getElementById('detailHead');
  thead.innerHTML = '<tr><th class="cb-col">☐</th><th>#</th>' + visibleCols.map(function(k) {
    var m = COL_META.find(function(c) { return c.key === k; });
    return '<th>' + (m ? m.cn : k) + '</th>';
  }).join('') + '</tr>';

  var tbody = document.getElementById('detailBody');
  tbody.innerHTML = pageData.map(function(d) {
    var checked = checkedIds.has(d.id) ? 'checked' : '';
    return '<tr><td class="cb-col"><input type="checkbox" data-id="' + d.id + '" ' + checked + ' onchange="toggleRowCheckbox(this)"></td><td>' + d.id + '</td>' + visibleCols.map(function(k) {
      var v;
      if (k === 'matCategory') v = getMatCategory(d.matCode);
      else if (k === 'videoProduct') v = getVideoProduct(d.matCode, d.matName);
      else v = d[k];
      if (v === undefined || v === '') v = '-';
      else if (NUM_KEYS.indexOf(k) >= 0) {
        var n = safeNum(v);
        v = (k.indexOf('Amt') >= 0 || k === 'price') ? n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : n.toLocaleString();
      }
      return '<td title="' + String(v).replace(/"/g,'&quot;') + '">' + v + '</td>';
    }).join('') + '</tr>';
  }).join('');

  if (!pageData.length) tbody.innerHTML = '<tr><td colspan="' + (visibleCols.length + 2) + '" style="text-align:center;padding:40px;color:#999;">暂无数据</td></tr>';

  document.getElementById('pageInfo').textContent = '共 ' + total + ' 条，第 ' + currentPage + '/' + totalPages + ' 页';
  var pb = document.getElementById('pageBtns');
  pb.innerHTML = '<button onclick="goPage(' + (currentPage - 1) + ')" ' + (currentPage <= 1 ? 'disabled' : '') + '>&lsaquo;</button>';
  for (var p = 1; p <= totalPages; p++) {
    if (p === 1 || p === totalPages || Math.abs(p - currentPage) <= 2) {
      pb.innerHTML += '<button class="' + (p === currentPage ? 'active' : '') + '" onclick="goPage(' + p + ')">' + p + '</button>';
    } else if (Math.abs(p - currentPage) === 3) {
      pb.innerHTML += '<button disabled>&hellip;</button>';
    }
  }
  pb.innerHTML += '<button onclick="goPage(' + (currentPage + 1) + ')" ' + (currentPage >= totalPages ? 'disabled' : '') + '>&rsaquo;</button>';

  document.querySelectorAll('.detail-toolbar .sort-btn').forEach(function(btn) {
    var key = btn.dataset.key;
    btn.classList.toggle('active', key === sortKey && sortDir !== '');
    var label = btn.textContent.replace(/[↕↑↓]\s*$/, '').trim();
    btn.textContent = key === sortKey && sortDir === 'asc' ? label + ' ↑' :
                      key === sortKey && sortDir === 'desc' ? label + ' ↓' :
                      label + ' ↕';
  });

  setupDetailHeaders();
}

function goPage(p) {
  var totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  if (p < 1 || p > totalPages) return;
  currentPage = p;
  renderDetail();
  document.getElementById('detailScroll').scrollTop = 0;
}

function toggleColPanel() {
  var panel = document.getElementById('colPanel');
  panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}
function renderColCheckboxes() {
  var container = document.getElementById('colCheckboxContainer');
  container.innerHTML = '';
  COL_META.forEach(function(col) {
    (function(col) {
      var label = document.createElement('label');
      label.className = 'col-cb';
      var cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.checked = visibleCols.indexOf(col.key) >= 0;
      cb.dataset.key = col.key;
      cb.addEventListener('change', function() {
        if (cb.checked) { if (visibleCols.indexOf(col.key) < 0) visibleCols.push(col.key); }
        else { visibleCols = visibleCols.filter(function(k) { return k !== col.key; }); }
        document.getElementById('colCount').textContent = '已选 ' + visibleCols.length + ' / ' + COL_META.length + ' 列';
        syncColSelector();
        renderDetail();
      });
      label.appendChild(cb);
      label.appendChild(document.createTextNode(col.cn));
      container.appendChild(label);
    })(col);
  });
}
function syncColSelector() {
  var sel = document.getElementById('colSelector');
  Array.from(sel.options).forEach(function(o) { o.selected = visibleCols.indexOf(o.value) >= 0; });
}
function selectAllCols() {
  visibleCols = COL_META.map(function(c) { return c.key; });
  renderColCheckboxes();
  syncColSelector();
  document.getElementById('colCount').textContent = '已选 ' + visibleCols.length + ' / ' + COL_META.length + ' 列';
  renderDetail();
}
function deselectAllCols() {
  visibleCols = [];
  renderColCheckboxes();
  syncColSelector();
  document.getElementById('colCount').textContent = '已选 ' + visibleCols.length + ' / ' + COL_META.length + ' 列';
  renderDetail();
}
var contextColIndex = -1;
function hideColumn() {
  if (contextColIndex >= 0 && contextColIndex < visibleCols.length) {
    var key = visibleCols[contextColIndex];
    visibleCols = visibleCols.filter(function(k) { return k !== key; });
    renderColCheckboxes();
    syncColSelector();
    document.getElementById('colCount').textContent = '已选 ' + visibleCols.length + ' / ' + COL_META.length + ' 列';
    renderDetail();
  }
  document.getElementById('contextMenu').style.display = 'none';
}

function exportData() {
  var data = [].concat(filtered);
  if (sortKey && sortDir) {
    data.sort(function(a, b) {
      var va = safeNum(a[sortKey]);
      var vb = safeNum(b[sortKey]);
      return sortDir === 'asc' ? va - vb : vb - va;
    });
  }
  var sliced = data.slice(0, 10);
  var headerRow = ['序号'].concat(visibleCols.map(function(k) { var m = COL_META.find(function(c) { return c.key === k; }); return m ? m.cn : k; }));
  var bodyRows = sliced.map(function(d, i) { return [i + 1].concat(visibleCols.map(function(k) { var v = d[k]; if (v === undefined || v === '') v = ''; else if (NUM_KEYS.indexOf(k) >= 0) v = safeNum(v); return v; })); });
  var ws = XLSX.utils.aoa_to_sheet([headerRow].concat(bodyRows));
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, '呆滞明细');
  XLSX.writeFile(wb, '呆滞库存明细_' + new Date().toISOString().slice(0,10) + '.xlsx');
}

function setupDetailHeaders() {
  document.querySelectorAll('#detailHead th').forEach(function(th) {
    if (th.cellIndex === 0) return;
    var colIdx = th.cellIndex - 1;
    th.draggable = true;
    th.title = '拖动调整列顺序 | 右键隐藏';

    th.addEventListener('dragstart', function(e) {
      e.dataTransfer.setData('text/plain', colIdx);
      e.dataTransfer.effectAllowed = 'move';
      th.classList.add('dragging');
    });
    th.addEventListener('dragend', function() {
      document.querySelectorAll('#detailHead th').forEach(function(h) { h.classList.remove('dragging', 'drag-over'); });
    });
    th.addEventListener('dragover', function(e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      if (th.cellIndex > 0) th.classList.add('drag-over');
    });
    th.addEventListener('dragleave', function() { th.classList.remove('drag-over'); });
    th.addEventListener('drop', function(e) {
      e.preventDefault();
      document.querySelectorAll('#detailHead th').forEach(function(h) { h.classList.remove('dragging', 'drag-over'); });
      var from = parseInt(e.dataTransfer.getData('text/plain'));
      var to = colIdx;
      if (!isNaN(from) && from >= 0 && to >= 0 && from !== to) {
        var moved = visibleCols.splice(from, 1)[0];
        visibleCols.splice(to, 0, moved);
        var sel = document.getElementById('colSelector');
        var opts = Array.from(sel.options);
        var opt = opts.splice(from, 1)[0];
        opts.splice(to, 0, opt);
        opts.forEach(function(o) { sel.appendChild(o); });
        document.getElementById('colCount').textContent = '已选 ' + visibleCols.length + ' / ' + COL_META.length + ' 列';
        renderDetail();
      }
    });

    th.addEventListener('contextmenu', function(e) {
      e.preventDefault();
      contextColIndex = colIdx;
      var menu = document.getElementById('contextMenu');
      menu.style.display = 'block';
      menu.style.left = e.clientX + 'px';
      menu.style.top = e.clientY + 'px';
    });
  });
}

// === Checkbox handlers ===
function toggleAllCheckbox(el) {
  var cbs = document.querySelectorAll('#detailBody input[type=checkbox]');
  cbs.forEach(function(cb) {
    cb.checked = el.checked;
    var id = parseInt(cb.dataset.id);
    if (el.checked) checkedIds.add(id);
    else checkedIds.delete(id);
  });
}
function toggleRowCheckbox(cb) {
  var id = parseInt(cb.dataset.id);
  if (cb.checked) checkedIds.add(id);
  else checkedIds.delete(id);
  var selAll = document.getElementById('cbSelectAll');
  if (selAll) {
    var all = document.querySelectorAll('#detailBody input[type=checkbox]');
    selAll.checked = all.length > 0 && Array.from(all).every(function(c) { return c.checked; });
  }
}

// === Tracking Render Functions ===
function getTrackDefault(row) {
  if (row) {
    return {
      matCode: row.matCode || '', source: 'import',
      prodLine: row.prodLine || '', matCat: row.matCat || '', matName: row.matName || '', matchCol: row.matchCol || '',
      staleAmt: safeNum(row.staleAmt), slowAmt: safeNum(row.slowAmt), overdueAmt: safeNum(row.overdueAmt), totalAmt: safeNum(row.totalAmt), qty: safeNum(row.qty),
      wasMatched: true,
      status: '待处理', progress: 0, expectedCloseDate: '',
      stagePersons: '[]', causeAnalysis: '', blocker: '', remark: '',
      updatedDate: new Date().toISOString().slice(0,10)
    };
  }
  return {
    matCode: '', source: 'manual',
    prodLine: '', matCat: '', matName: '', matchCol: '',
    staleAmt: 0, slowAmt: 0, overdueAmt: 0, totalAmt: 0, qty: 0,
    wasMatched: true,
    status: '待处理', progress: 0, expectedCloseDate: '',
    stagePersons: '[]', causeAnalysis: '', blocker: '', remark: '',
    updatedDate: new Date().toISOString().slice(0,10)
  };
}

async function addSelectedToTracking() {
  if (checkedIds.size === 0) { alert('请先在明细表中勾选需要跟踪的物料'); return; }
  var count = 0;
  for (var id of checkedIds) {
    var row = rawData.find(function(r) { return r.id === id; });
    if (!row || !row.matCode) continue;
    var exist = await trackingGetByMatCode(row.matCode);
    if (!exist) {
      var item = getTrackDefault(row);
      await trackingAdd(item);
      count++;
    }
  }
  if (count === 0) { alert('所选物料已在跟踪看板中'); return; }
  checkedIds.clear();
  var selAll = document.getElementById('cbSelectAll');
  if (selAll) selAll.checked = false;
  await loadTrackingData();
  renderTracking();
  renderDetail();
  alert('已新增 ' + count + ' 条到跟踪看板');
}

async function manualAddTrackItem() {
  var item = getTrackDefault(null);
  item.prodLine = '新物料';
  item.matCode = 'NEW-' + Date.now();
  await trackingAdd(item);
  await loadTrackingData();
  renderTracking();
}

async function deleteTrackItem(trackId) {
  if (!confirm('确认从跟踪看板移除该项？')) return;
  await trackingRemove(trackId);
  await loadTrackingData();
  renderTracking();
}

function toggleTrackSort(key) {
  if (trackSortKey !== key) {
    trackSortKey = key;
    trackSortDir = 'desc';
  } else {
    trackSortDir = trackSortDir === 'desc' ? 'asc' : 'desc';
  }
  renderTracking();
}

function updateTrackSortButtons() {
  document.querySelectorAll('#tabTracking .sort-btn').forEach(function(btn) {
    var key = btn.dataset.key;
    btn.classList.toggle('active', key === trackSortKey);
    var label = btn.textContent.replace(/[↕↑↓]/g, '').trim();
    btn.textContent = key === trackSortKey && trackSortDir === 'asc' ? label + ' ↑' : key === trackSortKey && trackSortDir === 'desc' ? label + ' ↓' : label + ' ↕';
  });
}

async function loadTrackingData() {
  trackingData = await trackingGetAll();
}

async function syncTrackingFromRawData() {
  var all = await trackingGetAll();
  if (!all.length) return;
  var changed = false;
  for (var t of all) {
    var matches = rawData.filter(function(r) { return r.matCode === t.matCode; });
    if (matches.length) {
      t.prodLine = matches[0].prodLine || t.prodLine;
      t.matName = matches[0].matName || t.matName;
      t.matCat = matches[0].matCat || t.matCat;
      t.matchCol = [...new Set(matches.map(function(r) { return r.matchCol; }).filter(Boolean))].join(', ');
      t.staleAmt = matches.reduce(function(s, r) { return s + safeNum(r.staleAmt); }, 0);
      t.slowAmt = matches.reduce(function(s, r) { return s + safeNum(r.slowAmt); }, 0);
      t.overdueAmt = matches.reduce(function(s, r) { return s + safeNum(r.overdueAmt); }, 0);
      t.totalAmt = matches.reduce(function(s, r) { return s + safeNum(r.totalAmt); }, 0);
      t.qty = matches.reduce(function(s, r) { return s + safeNum(r.qty); }, 0);
      t.wasMatched = true;
    } else {
      t.wasMatched = false;
    }
    t.updatedDate = new Date().toISOString().slice(0,10);
    await trackingUpdate(t);
    changed = true;
  }
  if (changed) await loadTrackingData();
}

function renderTracking() {
  // Populate prodLine filter options
  var prodLines = [...new Set(trackingData.map(function(t) { return t.prodLine; }).filter(Boolean))].sort();
  var selPl = document.getElementById('fTrackProdLine');
  var curPl = selPl.value;
  selPl.innerHTML = '<option value="">全部</option>' + prodLines.map(function(p) { return '<option value="' + p + '">' + p + '</option>'; }).join('');
  selPl.value = curPl;

  // Filter
  var fStatus = document.getElementById('fTrackStatus').value;
  var fLevel = document.getElementById('fTrackLevel').value;
  var fProdLine = document.getElementById('fTrackProdLine').value;
  var fMatCat = document.getElementById('fTrackMatCat').value;
  var data = trackingData;
  if (fStatus) data = data.filter(function(t) { return t.status === fStatus; });
  if (fLevel) data = data.filter(function(t) { return getLevel(t.staleAmt).key === fLevel; });
  if (fProdLine) data = data.filter(function(t) { return t.prodLine === fProdLine; });
  if (fMatCat) data = data.filter(function(t) { return fMatCat === '成品' ? t.matCat === '成品' : t.matCat !== '成品'; });
  // Sort by selected key
  data = [].concat(data).sort(function(a, b) {
    if (trackSortKey === 'staleAmt') {
      var diff = safeNum(a.staleAmt) - safeNum(b.staleAmt);
      return trackSortDir === 'desc' ? -diff : diff;
    }
    var da = a.updatedDate || '';
    var db = b.updatedDate || '';
    if (da < db) return trackSortDir === 'desc' ? 1 : -1;
    if (da > db) return trackSortDir === 'desc' ? -1 : 1;
    return 0;
  });
  updateTrackSortButtons();
  renderTrackingKPI(data);
  renderTrackingLevelSummary(data);
  renderTrackingTable(data);
}

function renderTrackingKPI(data) {
  var countPending = data.filter(function(t) { return t.status === '待处理'; }).length;
  var countProgress = data.filter(function(t) { return t.status === '处理中'; }).length;
  var countDone = data.filter(function(t) { return t.status === '已闭环'; }).length;
  var countHold = data.filter(function(t) { return t.status === '已搁置'; }).length;
  var avgProgress = data.length ? Math.round(data.reduce(function(s, t) { return s + (t.progress || 0); }, 0) / data.length) : 0;
  document.getElementById('trackKPI').innerHTML =
    '<div class="track-kpi-card pending"><div class="kpi-icon">⏳</div><div class="kpi-body"><div class="track-kpi-num">' + countPending + '</div><div class="kpi-lbl">待处理</div></div></div>' +
    '<div class="track-kpi-card progress"><div class="kpi-icon">🔄</div><div class="kpi-body"><div class="track-kpi-num">' + countProgress + '</div><div class="kpi-lbl">处理中</div></div></div>' +
    '<div class="track-kpi-card done"><div class="kpi-icon">✅</div><div class="kpi-body"><div class="track-kpi-num">' + countDone + '</div><div class="kpi-lbl">已闭环</div></div></div>' +
    '<div class="track-kpi-card hold"><div class="kpi-icon">📦</div><div class="kpi-body"><div class="track-kpi-num">' + countHold + '</div><div class="kpi-lbl">已搁置</div></div></div>' +
    '<div class="track-kpi-card avg"><div class="kpi-icon">📈</div><div class="kpi-body"><div class="track-kpi-num">' + avgProgress + '%</div><div class="kpi-lbl">平均进度</div></div></div>';
}

function renderTrackingLevelSummary(data) {
  var high = data.filter(function(t) { return getLevel(t.staleAmt).key === '高'; }).length;
  var med = data.filter(function(t) { return getLevel(t.staleAmt).key === '中'; }).length;
  var low = data.filter(function(t) { return getLevel(t.staleAmt).key === '低'; }).length;
  var total = data.length;
  document.getElementById('trackLevelSummary').innerHTML =
    '<span class="level-badge high">🔴 高优先级 ' + high + ' 项</span>' +
    '<span class="level-badge med">🟡 中优先级 ' + med + ' 项</span>' +
    '<span class="level-badge low">🟢 低优先级 ' + low + ' 项</span>' +
    '<span style="font-size:12px;color:var(--gray-400);margin-left:12px;">共 ' + total + ' 条跟踪记录</span>';
}

function renderTrackingTable(data) {
  var total = data.length;
  var totalPages = Math.max(1, Math.ceil(total / TRACK_PAGE_SIZE));
  if (trackCurrentPage > totalPages) trackCurrentPage = totalPages;
  var start = (trackCurrentPage - 1) * TRACK_PAGE_SIZE;
  var pageData = data.slice(start, start + TRACK_PAGE_SIZE);

  var thead = document.getElementById('trackHead');
  thead.innerHTML = '<tr><th style="width:72px">等级</th><th>品线</th><th>物料编码</th><th>物料名称</th><th style="width:180px">匹配列</th><th class="amt">数量</th><th class="amt">呆料金额</th><th class="amt">滞料金额</th><th class="amt">超期金额</th><th class="amt">总金额</th><th style="width:80px">状态</th><th style="width:140px">进度</th><th style="width:100px">预计闭环</th><th style="width:160px">原因分析</th><th style="width:120px">卡点事项</th><th style="width:140px">阶段责任人</th><th style="width:70px">操作</th></tr>';

  var tbody = document.getElementById('trackBody');
  tbody.innerHTML = pageData.map(function(t) {
    var lv = getLevel(t.staleAmt);
    var pct = Math.min(100, Math.max(0, t.progress || 0));
    var stageCount = 0;
    var unmatched = t.wasMatched === false;
    try { var stages = JSON.parse(t.stagePersons || '[]'); stageCount = stages.length; } catch(e) {}
    var matNameHtml = (t.matName || '') + (unmatched ? ' <span class="unmatched-tag">⚠️ 本次未匹配</span>' : '');
    return '<tr class="' + (unmatched ? 'track-unmatched' : '') + '">' +
      '<td><span class="level-badge ' + lv.key + '">' + lv.icon + ' ' + lv.label + '</span></td>' +
      '<td class="editable" data-field="prodLine" data-tid="' + t.trackId + '" onclick="editTrackField(this,\'prodLine\')">' + (t.prodLine || '') + '</td>' +
      '<td class="editable" data-field="matCode" data-tid="' + t.trackId + '" onclick="editTrackField(this,\'matCode\')">' + (t.matCode || '') + '</td>' +
      '<td class="editable" data-field="matName" data-tid="' + t.trackId + '" onclick="editTrackField(this,\'matName\')">' + matNameHtml + '</td>' +
      '<td onclick="showMatchColDetail(' + t.trackId + ')" style="cursor:pointer;color:var(--primary);text-decoration:underline">' + (t.matchCol || '') + '</td>' +
      '<td class="amt">' + (safeNum(t.qty).toLocaleString()) + '</td>' +
      '<td class="amt editable" data-field="staleAmt" data-tid="' + t.trackId + '" onclick="editTrackField(this,\'staleAmt\',\'number\')">' + fmtMoney(t.staleAmt) + '</td>' +
      '<td class="amt editable" data-field="slowAmt" data-tid="' + t.trackId + '" onclick="editTrackField(this,\'slowAmt\',\'number\')">' + fmtMoney(t.slowAmt) + '</td>' +
      '<td class="amt editable" data-field="overdueAmt" data-tid="' + t.trackId + '" onclick="editTrackField(this,\'overdueAmt\',\'number\')">' + fmtMoney(t.overdueAmt) + '</td>' +
      '<td class="amt editable" data-field="totalAmt" data-tid="' + t.trackId + '" onclick="editTrackField(this,\'totalAmt\',\'number\')">' + fmtMoney(t.totalAmt) + '</td>' +
      '<td><select class="track-inline-select" data-tid="' + t.trackId + '" data-field="status" onchange="saveTrackField(this)">' +
        '<option value="待处理"' + (t.status === '待处理' ? ' selected' : '') + '>⏳待处理</option>' +
        '<option value="处理中"' + (t.status === '处理中' ? ' selected' : '') + '>🔄处理中</option>' +
        '<option value="已闭环"' + (t.status === '已闭环' ? ' selected' : '') + '>✅已闭环</option>' +
        '<option value="已搁置"' + (t.status === '已搁置' ? ' selected' : '') + '>📦已搁置</option>' +
      '</select></td>' +
      '<td><div style="display:flex;align-items:center;gap:6px">' +
        '<div class="progress-bar"><div class="progress-fill" style="width:' + pct + '%"></div></div>' +
        '<input class="track-inline-num" type="number" min="0" max="100" value="' + pct + '" style="width:44px;font-size:11px;padding:2px 4px" data-tid="' + t.trackId + '" data-field="progress" onchange="saveTrackField(this)">%' +
      '</div></td>' +
      '<td class="editable" data-field="expectedCloseDate" data-tid="' + t.trackId + '" onclick="editTrackField(this,\'expectedCloseDate\',\'date\')">' + (t.expectedCloseDate || '-') + '</td>' +
      '<td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;cursor:pointer;color:var(--primary)" onclick="showTextEditor(' + t.trackId + ',\'causeAnalysis\',\'编辑原因分析\')" title="' + (t.causeAnalysis || '').replace(/"/g,'&quot;') + '">' + (t.causeAnalysis || '') + '</td>' +
      '<td style="max-width:120px;overflow:hidden;text-overflow:ellipsis;cursor:pointer;color:var(--primary)" onclick="showTextEditor(' + t.trackId + ',\'blocker\',\'编辑卡点事项\')" title="' + (t.blocker || '').replace(/"/g,'&quot;') + '">' + (t.blocker || '') + '</td>' +
      '<td><a href="javascript:void(0)" onclick="toggleStageEditor(this,' + t.trackId + ')" style="font-size:12px;color:var(--primary)">📋 ' + (stageCount > 0 ? stageCount + '阶段' : '设置') + '</a></td>' +
      '<td style="white-space:nowrap">' +
        '<button class="track-btn-save" onclick="saveTrackItem(' + t.trackId + ')" title="保存">💾</button>' +
        '<button class="track-btn-del" onclick="deleteTrackItem(' + t.trackId + ')" title="删除">🗑️</button>' +
      '</td></tr>';
  }).join('');

  if (!pageData.length) {
    tbody.innerHTML = '<tr><td colspan="17" style="text-align:center;padding:40px;color:#999;">暂无跟踪记录，请从明细表导入或新增</td></tr>';
  }

  document.getElementById('trackPageInfo').textContent = '共 ' + total + ' 条，第 ' + trackCurrentPage + '/' + totalPages + ' 页';
  var pb = document.getElementById('trackPageBtns');
  pb.innerHTML = '<button onclick="trackGoPage(' + (trackCurrentPage - 1) + ')" ' + (trackCurrentPage <= 1 ? 'disabled' : '') + '>&lsaquo;</button>';
  for (var p = 1; p <= totalPages; p++) {
    if (p === 1 || p === totalPages || Math.abs(p - trackCurrentPage) <= 2) {
      pb.innerHTML += '<button class="' + (p === trackCurrentPage ? 'active' : '') + '" onclick="trackGoPage(' + p + ')">' + p + '</button>';
    } else if (Math.abs(p - trackCurrentPage) === 3) {
      pb.innerHTML += '<button disabled>&hellip;</button>';
    }
  }
  pb.innerHTML += '<button onclick="trackGoPage(' + (trackCurrentPage + 1) + ')" ' + (trackCurrentPage >= totalPages ? 'disabled' : '') + '>&rsaquo;</button>';
}

function trackGoPage(p) {
  var total = trackingData.length;
  var totalPages = Math.max(1, Math.ceil(total / TRACK_PAGE_SIZE));
  if (p < 1 || p > totalPages) return;
  trackCurrentPage = p;
  renderTracking();
  var wrap = document.getElementById('trackTableWrap');
  if (wrap) wrap.scrollTop = 0;
}

// === Tracking Editor Functions ===
function editTrackField(td, field, type) {
  if (td.tagName === 'INPUT' || td.tagName === 'SELECT') return;
  var tid = td.dataset.tid;
  var val = td.textContent.trim();
  if (val === '-') val = '';
  if (type === 'number') {
    td.innerHTML = '<input class="track-inline-num" type="number" value="' + safeNum(val) + '" style="width:90px" data-tid="' + tid + '" data-field="' + field + '" onchange="saveTrackField(this)" onblur="saveTrackField(this)">';
  } else if (type === 'date') {
    td.innerHTML = '<input class="track-inline-date" type="date" value="' + val + '" style="width:120px" data-tid="' + tid + '" data-field="' + field + '" onchange="saveTrackField(this)" onblur="saveTrackField(this)">';
  } else {
    td.innerHTML = '<input class="track-inline-text" type="text" value="' + val.replace(/"/g,'&quot;') + '" style="width:100%" data-tid="' + tid + '" data-field="' + field + '" onchange="saveTrackField(this)" onblur="saveTrackField(this)">';
  }
  var inp = td.querySelector('input');
  if (inp) { inp.focus(); inp.select(); }
}

async function saveTrackField(el) {
  var tid = parseInt(el.dataset.tid);
  var field = el.dataset.field;
  var val = el.value;
  var item = trackingData.find(function(t) { return t.trackId === tid; });
  if (!item) return;
  if (field === 'progress') val = parseInt(val) || 0;
  if (field === 'staleAmt' || field === 'slowAmt' || field === 'overdueAmt' || field === 'totalAmt') val = parseFloat(val) || 0;
  item[field] = val;
  await trackingUpdate(item);
  // Refresh the table row visually without full re-render
  renderTracking();
}

async function saveTrackItem(tid) {
  renderTracking();
}

// === Stage Editor (inline expand) ===
function toggleStageEditor(link, tid) {
  var tr = link.closest('tr');
  var nextRow = tr.nextElementSibling;
  if (nextRow && nextRow.classList.contains('stage-editor-row')) {
    nextRow.remove();
    return;
  }
  var item = trackingData.find(function(t) { return t.trackId === tid; });
  var stages = [];
  try { stages = JSON.parse(item.stagePersons || '[]'); } catch(e) {}
  var row = document.createElement('tr');
  row.className = 'stage-editor-row';
  row.innerHTML = '<td colspan="17"><div class="stage-editor-inner">' +
    '<table><thead><tr><th style="width:120px">阶段名</th><th style="width:100px">负责人</th><th style="width:110px">截止日期</th><th style="width:90px">状态</th><th style="width:50px"></th></tr></thead><tbody id="stageBody' + tid + '">' +
    stages.map(function(s, i) {
      return '<tr>' +
        '<td><input class="stage-input" type="text" value="' + (s.stage || '') + '" data-idx="' + i + '" data-tid="' + tid + '" data-sfield="stage" onchange="saveStages(' + tid + ',this)"></td>' +
        '<td><input class="stage-input" type="text" value="' + (s.person || '') + '" data-idx="' + i + '" data-tid="' + tid + '" data-sfield="person" onchange="saveStages(' + tid + ',this)"></td>' +
        '<td><input class="stage-input" type="date" value="' + (s.deadline || '') + '" data-idx="' + i + '" data-tid="' + tid + '" data-sfield="deadline" onchange="saveStages(' + tid + ',this)"></td>' +
        '<td><select class="stage-input" data-idx="' + i + '" data-tid="' + tid + '" data-sfield="stageStatus" onchange="saveStages(' + tid + ',this)">' +
          '<option value="待开始"' + (s.stageStatus === '待开始' ? ' selected' : '') + '>待开始</option>' +
          '<option value="进行中"' + (s.stageStatus === '进行中' ? ' selected' : '') + '>进行中</option>' +
          '<option value="完成"' + (s.stageStatus === '完成' ? ' selected' : '') + '>✅完成</option>' +
        '</select></td>' +
        '<td><button class="track-btn-del" onclick="removeStage(' + tid + ',' + i + ')" style="font-size:11px">✕</button></td>' +
      '</tr>';
    }).join('') +
    '</tbody></table>' +
    '<button class="btn-filter outline" style="margin-top:6px;font-size:11px;padding:4px 10px" onclick="addStage(' + tid + ')">➕ 添加阶段</button>' +
  '</div></td>';
  tr.parentNode.insertBefore(row, tr.nextElementSibling);
}

async function saveStages(tid, el) {
  var tbody = document.getElementById('stageBody' + tid);
  if (!tbody) return;
  var rows = tbody.querySelectorAll('tr');
  var stages = [];
  rows.forEach(function(row) {
    var inputs = row.querySelectorAll('.stage-input');
    var stage = {}, valid = false;
    inputs.forEach(function(inp) {
      var field = inp.dataset.sfield;
      stage[field] = inp.value;
      if (field === 'stage' && inp.value.trim()) valid = true;
    });
    if (valid) stages.push(stage);
  });
  var item = trackingData.find(function(t) { return t.trackId === tid; });
  if (item) {
    item.stagePersons = JSON.stringify(stages);
    await trackingUpdate(item);
  }
  // Use DOM traversal from the triggering element to find the link
  var link = null;
  if (el) {
    var editorRow = el.closest('.stage-editor-row');
    if (editorRow) {
      var prevRow = editorRow.previousElementSibling;
      if (prevRow) link = prevRow.querySelector('a[href*="javascript"]');
    }
  }
  if (link) {
    var cnt = stages.length;
    link.textContent = '📋 ' + (cnt > 0 ? cnt + '阶段' : '设置');
  }
}

function addStage(tid) {
  var tbody = document.getElementById('stageBody' + tid);
  if (!tbody) return;
  var idx = tbody.children.length;
  var tr = document.createElement('tr');
  tr.innerHTML =
    '<td><input class="stage-input" type="text" value="" data-idx="' + idx + '" data-tid="' + tid + '" data-sfield="stage" onchange="saveStages(' + tid + ',this)"></td>' +
    '<td><input class="stage-input" type="text" value="" data-idx="' + idx + '" data-tid="' + tid + '" data-sfield="person" onchange="saveStages(' + tid + ',this)"></td>' +
    '<td><input class="stage-input" type="date" value="" data-idx="' + idx + '" data-tid="' + tid + '" data-sfield="deadline" onchange="saveStages(' + tid + ',this)"></td>' +
    '<td><select class="stage-input" data-idx="' + idx + '" data-tid="' + tid + '" data-sfield="stageStatus" onchange="saveStages(' + tid + ',this)">' +
      '<option value="待开始">待开始</option><option value="进行中">进行中</option><option value="完成">✅完成</option>' +
    '</select></td>' +
    '<td><button class="track-btn-del" onclick="removeStage(' + tid + ',' + idx + ')" style="font-size:11px">✕</button></td>';
  tbody.appendChild(tr);
}

async function removeStage(tid, idx) {
  var tbody = document.getElementById('stageBody' + tid);
  if (!tbody) return;
  var rows = Array.from(tbody.querySelectorAll('tr'));
  if (idx >= 0 && idx < rows.length) {
    rows[idx].remove();
    await saveStages(tid);
  }
}

// === MatchCol Modal ===
function showMatchColDetail(trackId) {
  var t = trackingData.find(function(x) { return x.trackId === trackId; });
  if (!t) return;
  var matches = rawData.filter(function(r) { return r.matCode === t.matCode; });
  document.getElementById('matchColModalTitle').textContent = t.matCode + ' — 仓库分布明细';
  if (!matches.length) {
    document.getElementById('matchColModalBody').innerHTML = '<div style="padding:20px;text-align:center;color:#999;">暂无数据</div>';
  } else {
    var totalQty = 0, totalStale = 0, totalSlow = 0, totalOverdue = 0;
    var html = '<table class="summary-table"><thead><tr><th>匹配列</th><th class="amt">数量</th><th class="amt">呆料金额</th><th class="amt">滞料金额</th><th class="amt">超期金额</th></tr></thead><tbody>';
    matches.forEach(function(m) {
      var q = safeNum(m.qty);
      var sa = safeNum(m.staleAmt);
      var sl = safeNum(m.slowAmt);
      var oa = safeNum(m.overdueAmt);
      totalQty += q; totalStale += sa; totalSlow += sl; totalOverdue += oa;
      html += '<tr><td>' + (m.matchCol || '') + '</td><td class="amt">' + q.toLocaleString() + '</td><td class="amt">' + fmtMoney(sa) + '</td><td class="amt">' + fmtMoney(sl) + '</td><td class="amt">' + fmtMoney(oa) + '</td></tr>';
    });
    html += '</tbody><tfoot><tr style="font-weight:700;border-top:2px solid var(--gray-200)"><td>合计</td><td class="amt">' + totalQty.toLocaleString() + '</td><td class="amt">' + fmtMoney(totalStale) + '</td><td class="amt">' + fmtMoney(totalSlow) + '</td><td class="amt">' + fmtMoney(totalOverdue) + '</td></tr></tfoot></table>';
    document.getElementById('matchColModalBody').innerHTML = html;
  }
  document.getElementById('matchColModal').style.display = 'flex';
}

function closeMatchColModal() {
  document.getElementById('matchColModal').style.display = 'none';
}

function showVideoProductDetail(productName, sortField) {
  sortField = sortField || 'totalAmt';
  var data = filtered.filter(function(d) {
    return d.prodLine === '专业视频产品线' && getMatCategory(d.matCode) !== '原材料' && getVideoProduct(d.matCode, d.matName) === productName;
  });
  data.sort(function(a, b) { return safeNum(b[sortField]) - safeNum(a[sortField]); });
  document.getElementById('matchColModalTitle').textContent = '产品「' + productName + '」物料明细';
  if (!data.length) {
    document.getElementById('matchColModalBody').innerHTML = '<div style="padding:20px;text-align:center;color:#999;">暂无数据</div>';
  } else {
    var html = '<table class="summary-table"><thead><tr><th>物料编码</th><th>物料名称</th><th>产品线</th><th class="amt">库存总金额</th><th class="amt">滞料金额</th></tr></thead><tbody>';
    data.forEach(function(d) {
      html += '<tr><td>' + d.matCode + '</td><td>' + d.matName + '</td><td>' + d.prodLine + '</td><td class="amt">' + fmtMoney(d.totalAmt) + '</td><td class="amt">' + fmtMoney(d.slowAmt) + '</td></tr>';
    });
    html += '</tbody></table>';
    document.getElementById('matchColModalBody').innerHTML = html;
  }
  document.getElementById('matchColModal').style.display = 'flex';
}

// === Text Editor Modal ===
var _textEditorTrackId = null;
var _textEditorField = null;

function showTextEditor(trackId, field, title) {
  _textEditorTrackId = trackId;
  _textEditorField = field;
  var t = trackingData.find(function(x) { return x.trackId === trackId; });
  if (!t) return;
  document.getElementById('textEditorTitle').textContent = title;
  document.getElementById('textEditorArea').value = t[field] || '';
  document.getElementById('textEditorModal').style.display = 'flex';
}

function saveTextEditor() {
  var val = document.getElementById('textEditorArea').value;
  var t = trackingData.find(function(x) { return x.trackId === _textEditorTrackId; });
  if (!t) return;
  t[_textEditorField] = val;
  trackingUpdate(t).then(function() {
    closeTextEditor();
    renderTracking();
  });
}

function closeTextEditor() {
  document.getElementById('textEditorModal').style.display = 'none';
  _textEditorTrackId = null;
  _textEditorField = null;
}

function generateMock() {
  var lines = ['传动件','液压件','气动件','轴承类','密封件','管阀件','电气件','传感器','减速机','标准件'];
  var whs = ['华东主仓','华南分仓','华北分仓','西南仓','华中仓'];
  var cats = ['电子类','机械类','液压类','气动类','电气类'];
  var depts = ['计划管理部','采购部','生产部','仓储部','销售部'];
  var data = [];
  for (var i = 1; i <= 500; i++) {
    data.push({
      id: i, matchCol: '', assessMech: '库龄≤30天', dept: depts[i % 5], person: '责任人' + i,
      maxAge: 30, price: Math.random() * 100, overdueQty: Math.floor(Math.random() * 100),
      overdueAmtBucket: '', overdueAmt: Math.random() * 1000, totalAmt: Math.random() * 5000,
      slowAmt: Math.random() * 2000, staleAmt: Math.random() * 3000,
      matCat: cats[i % 5], strategy: '0', eol: 0, salesCat: '其他',
      prodLine: lines[i % 10], matCode: 'MOCK-' + String(i).padStart(5,'0'),
      matName: '模拟物料' + i, spec: '规格' + i, matProp: '外购', matGroup: '标准件',
      warehouse: whs[i % 5], invStatus: '可用', unit: 'Pcs', qty: Math.floor(Math.random() * 1000),
      q0_15: 0, q15_30: 0, q30_45: 0, q45_60: 0, q60_90: 0, q90_180: 0, q180_360: 0, q360_720: 0, q720: 0,
      a0_15: 0, a15_30: 0, a30_45: 0, a45_60: 0, a60_90: 0, a90_180: 0, a180_360: 0, a360_720: 0, a720: 0
    });
  }
  return data;
}

// Expose to global scope for inline onclick handlers
window.handleFileUpload = handleFileUpload;
window.loadDemo = loadDemo;
window.applyFilters = applyFilters;
window.resetFilters = resetFilters;
window.toggleSort = toggleSort;
window.toggleColPanel = toggleColPanel;
window.selectAllCols = selectAllCols;
window.deselectAllCols = deselectAllCols;
window.hideColumn = hideColumn;
window.goPage = goPage;
window.exportData = exportData;
window.exportShareVersion = exportShareVersion;
window.toggleAllCheckbox = toggleAllCheckbox;
window.toggleRowCheckbox = toggleRowCheckbox;
window.addSelectedToTracking = addSelectedToTracking;
window.manualAddTrackItem = manualAddTrackItem;
window.deleteTrackItem = deleteTrackItem;
window.renderTracking = renderTracking;
window.trackGoPage = trackGoPage;
window.editTrackField = editTrackField;
window.saveTrackField = saveTrackField;
window.saveTrackItem = saveTrackItem;
window.toggleTrackSort = toggleTrackSort;
window.toggleStageEditor = toggleStageEditor;
window.saveStages = saveStages;
window.addStage = addStage;
window.removeStage = removeStage;
window.showMatchColDetail = showMatchColDetail;
window.closeMatchColModal = closeMatchColModal;
window.showVideoProductDetail = showVideoProductDetail;
window.showTextEditor = showTextEditor;
window.saveTextEditor = saveTextEditor;
window.closeTextEditor = closeTextEditor;

init();
};

// === Export JS template (via .toString()) ===
EXPORT_JS = APP_FN.toString()
  .replace(/^[^{]+\{/, '')
  .replace(/\}\s*$/, '')
  .trim();

// === Execute the app ===
APP_FN();
