import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const barData = [
  { month: 'Jan', complete: 21, doing: 26 },
  { month: 'Feb', complete: 11, doing: 17 },
  { month: 'Mar', complete: 18, doing: 19 },
  { month: 'Apr', complete: 22, doing: 22 },
  { month: 'May', complete: 19, doing: 18 },
  { month: 'Jun', complete: 21, doing: 21 },
  { month: 'Jul', complete: 22, doing: 21 },
  { month: 'Aug', complete: 20, doing: 20 },
  { month: 'Sep', complete: 25, doing: 27 },
  { month: 'Oct', complete: 24, doing: 25 },
  { month: 'Nov', complete: 24, doing: 23 },
];

const MAX_BAR = 30;

const calendarDays = [
  [31, 30, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, 1, 2],
];

const activeProjects = [
  { name: 'Brand Logo Design', lead: 'Kato F. Tucker', leadImg: 'https://i.pravatar.cc/150?u=kato', progress: 85, progressColor: '#22c55e', assignees: 4, status: 'Completed', statusColor: '#22c55e', date: '10 Feb 2022' },
  { name: 'Redesign - Landing Page', lead: 'Hedwig F. Nguyen', leadImg: 'https://i.pravatar.cc/150?u=hedwig', progress: 55, progressColor: '#4361ee', assignees: 3, status: 'In Process', statusColor: '#f59e0b', date: '15 Mar 2022' },
  { name: 'Multipurpose Landing', lead: 'Genevieve U. Watts', leadImg: 'https://i.pravatar.cc/150?u=gen', progress: 70, progressColor: '#4361ee', assignees: 3, status: 'In Process', statusColor: '#f59e0b', date: '26 Nov 2022' },
  { name: 'Chat Application', lead: 'Casey E. Hood', leadImg: 'https://i.pravatar.cc/150?u=casey', progress: 20, progressColor: '#ef4444', assignees: 2, status: 'Pending', statusColor: '#ef4444', date: '06 Sep 2021' },
  { name: 'Create Wireframe', lead: 'Caleb X. Finch', leadImg: 'https://i.pravatar.cc/150?u=caleb', progress: 90, progressColor: '#22c55e', assignees: 4, status: 'Completed', statusColor: '#22c55e', date: '21 Dec 2022' },
  { name: 'Redesign - Landing Page', lead: 'Hedwig F. Nguyen', leadImg: 'https://i.pravatar.cc/150?u=hedwig2', progress: 45, progressColor: '#4361ee', assignees: 3, status: 'In Process', statusColor: '#f59e0b', date: '15 Mar 2022' },
];

const activities = [
  { name: 'Kato F. Tucker', time: 'Today, 5h ago', action: 'Commented on', link: 'Project', comment: 'Lorem Ipsum is simply dummy text of the...', img: 'https://i.pravatar.cc/150?u=kato' },
  { name: 'Hedwig F. Nguyen', time: 'Yesterday, 05.25PM', action: 'Added a file to', link: 'Kiloo Project', file: 'Design System.Fig', size: '18M', extra: '+2', img: 'https://i.pravatar.cc/150?u=hedwig' },
  { name: 'Kato F. Tucker', time: 'Yesterday, 06.00PM', action: 'Uploaded new files', link: '', comment: '', img: 'https://i.pravatar.cc/150?u=kato' },
];

const messages = [
  { name: 'Nia Hillyer', time: '2:09 PM', msg: 'How do you do?', img: 'https://i.pravatar.cc/150?u=nia' },
  { name: 'Alma Clarke', time: '1:44 PM', msg: "I've forgotten how", img: 'https://i.pravatar.cc/150?u=alma' },
  { name: 'Sean Freeman', time: '12:09 PM', msg: 'I was wondering...', img: 'https://i.pravatar.cc/150?u=sean' },
  { name: 'Roxanne', time: '2:00 PM', msg: 'Wasup for the third ...', img: 'https://i.pravatar.cc/150?u=rox' },
];

const sideNavItems = [
  { label: 'Dashboard', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>, sub: ['Sales', 'Analytics', 'Finance', 'Crypto'], expanded: true },
];

const sideApps = [
  { name: 'Chat', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> },
  { name: 'Mailbox', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> },
  { name: 'Todo List', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg> },
  { name: 'Notes', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> },
  { name: 'Scrumboard', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg> },
  { name: 'Contacts', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> },
  { name: 'Invoice', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"></rect><line x1="16" y1="2" x2="16" y2="4"></line><line x1="8" y1="2" x2="8" y2="4"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> },
  { name: 'Calendar', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> }
];

const sideUI = ['Components', 'Elements', 'Charts', 'Font Icons', 'Drag and Drop'];
const sideTables = ['Tables', 'Data Tables', 'Forms'];
const sidePages = ['Users', 'Pages', 'Authentication'];
const sideSupports = ['Documentation'];

function DonutChart() {
  const segments = [
    { color: '#4361ee', pct: 35 },
    { color: '#805dca', pct: 25 },
    { color: '#00ab55', pct: 20 },
    { color: '#e2a03f', pct: 20 },
  ];
  const r = 70, cx = 90, cy = 90, stroke = 25;
  const circumference = 2 * Math.PI * r;
  let offset = 0;
  return (
    <svg width="180" height="180" viewBox="0 0 180 180">
      {segments.map((s, i) => {
        const dash = (s.pct / 100) * circumference;
        const gap = circumference - dash;
        const el = (
          <circle
            key={i}
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke={s.color}
            strokeWidth={stroke}
            strokeDasharray={`${dash} ${gap}`}
            strokeDashoffset={-offset * circumference / 100}
            style={{ transform: 'rotate(-90deg)', transformOrigin: '90px 90px', transition: 'all 0.3s' }}
          />
        );
        offset += s.pct;
        return el;
      })}
      <circle cx={cx} cy={cy} r={r - stroke / 2 - 2} fill="white" />
      <text x={cx} y={cy} textAnchor="middle" fontSize="14" fill="#3b3f5c" fontWeight="700">Category</text>
    </svg>
  );
}

function MiniArea({ color, path }) {
  const points = path || "M0,40 Q30,10 60,35 T120,5 L120,50 L0,50 Z";
  return (
    <svg width="100%" height="50" viewBox="0 0 120 50" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 0 }}>
      <path d={points} fill={color} fillOpacity="0.15" />
      <path d={points.split('L')[0]} fill="none" stroke={color} strokeWidth="2" />
    </svg>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();
  const [sideExpanded, setSideExpanded] = useState(true);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Nunito', sans-serif", background: '#fafafa', fontSize: 13, color: '#0e1726' }}>

      {/* SIDEBAR */}
      <div style={{ width: sideExpanded ? 260 : 60, background: '#fff', borderRight: '1px solid #e0e6ed', display: 'flex', flexDirection: 'column', transition: 'width 0.2s', overflow: 'hidden', flexShrink: 0, zIndex: 1000 }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '20px 15px', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ width: 34, height: 34, background: 'linear-gradient(to right, #4361ee, #af1dca)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold', fontSize: 20 }}>V</div>
          {sideExpanded && <span style={{ fontWeight: 800, fontSize: 20, color: '#0e1726', letterSpacing: '0.5px' }}>VRISTO</span>}
          <div onClick={() => setSideExpanded(!sideExpanded)} style={{ marginLeft: 'auto', cursor: 'pointer', color: '#888ea8' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline></svg>
          </div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '15px 0' }}>
          {/* Dashboard */}
          <div style={{ margin: '0 12px 10px', padding: '10px 15px', background: '#f6f7f8', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', color: '#4361ee' }}>
            {sideNavItems[0].icon}
            {sideExpanded && <><span style={{ fontWeight: 700 }}>Dashboard</span><span style={{ marginLeft: 'auto' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span></>}
          </div>
          {sideExpanded && sideNavItems[0].sub.map(s => (
            <div key={s} style={{ padding: '8px 15px 8px 50px', color: '#506690', cursor: 'pointer', fontSize: 13, fontWeight: 500 }}>— {s}</div>
          ))}

          {sideExpanded && <div style={{ padding: '20px 25px 8px', fontSize: 12, fontWeight: 700, color: '#888ea8', letterSpacing: 1 }}>APPS</div>}
          {sideApps.map(a => (
            <div key={a.name} style={{ margin: '2px 12px', padding: '10px 15px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 12, color: '#506690', cursor: 'pointer', transition: 'all 0.2s' }}>
              <span style={{ color: '#506690' }}>{a.icon}</span>
              {sideExpanded && <span style={{ fontWeight: 600 }}>{a.name}</span>}
            </div>
          ))}

          {sideExpanded && (
            <>
              <div style={{ padding: '20px 25px 8px', fontSize: 12, fontWeight: 700, color: '#888ea8', letterSpacing: 1 }}>USER INTERFACE</div>
              {sideUI.map(a => (
                <div key={a} style={{ margin: '2px 12px', padding: '10px 15px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 12, color: '#506690', cursor: 'pointer' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                  <span style={{ fontWeight: 600 }}>{a}</span>
                  <span style={{ marginLeft: 'auto' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      {/* MAIN AREA */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

        {/* TOPBAR */}
        <div style={{ background: '#fff', borderBottom: '1px solid #e5e7eb', padding: '0 25px', height: 65, display: 'flex', alignItems: 'center', gap: 20, flexShrink: 0, zIndex: 900 }}>
          <div style={{ display: 'flex', gap: 15, color: '#888ea8' }}>
            <svg style={{ cursor: 'pointer' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            <svg style={{ cursor: 'pointer' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
            <svg style={{ cursor: 'pointer' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', background: '#f6f7f8', borderRadius: 8, padding: '8px 15px', gap: 10, flex: 1, maxWidth: 300 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888ea8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input placeholder="Search..." style={{ border: 'none', outline: 'none', background: 'transparent', fontSize: 13, color: '#0e1726', width: '100%' }} />
          </div>

          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 18, color: '#888ea8' }}>
            <svg style={{ cursor: 'pointer' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer' }}>
              <span style={{ fontSize: 18 }}>🇺🇸</span>
            </div>
            <svg style={{ cursor: 'pointer' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <div style={{ position: 'relative' }}>
              <svg style={{ cursor: 'pointer' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              <span style={{ position: 'absolute', top: 0, right: 0, width: 6, height: 6, background: '#00ab55', borderRadius: '50%', border: '1px solid white' }} />
            </div>
            <button
              onClick={() => navigate('/signin')}
              style={{
                background: 'linear-gradient(to right, #4361ee, #af1dca)',
                color: 'white',
                border: 'none',
                borderRadius: 8,
                padding: '7px 15px',
                cursor: 'pointer',
                fontSize: 12,
                fontWeight: 700,
                boxShadow: '0 4px 6px -1px rgba(67, 97, 238, 0.3)',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-1px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Sign In
            </button>
            <div style={{ width: 34, height: 34, borderRadius: '50%', overflow: 'hidden', cursor: 'pointer', border: '1px solid #e0e6ed' }}>
              <img src="https://i.pravatar.cc/150?u=admin" alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '25px 25px' }}>

          {/* Breadcrumb */}
          <div style={{ marginBottom: 20, color: '#888ea8', fontSize: 13, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ color: '#4361ee', cursor: 'pointer', fontWeight: 600 }}>Dashboard</span>
            <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <span>Multipurpose</span>
          </div>

          {/* TOP SECTION: Banner + Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 25 }}>
            {/* Welcome Banner */}
            <div style={{
              background: 'linear-gradient(135deg, #fff9e6 0%, #fff0d1 100%)',
              borderRadius: 12,
              padding: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
            }}>
              <div style={{ zIndex: 1 }}>
                <h2 style={{ color: '#e7515a', fontSize: 24, fontWeight: 800, margin: '0 0 10px' }}>Welcome to Vristo!</h2>
                <p style={{ color: '#3b3f5c', fontSize: 14, lineHeight: 1.6, maxWidth: 350, margin: '0 0 25px', fontWeight: 500 }}>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                <button style={{ background: '#4361ee', color: 'white', border: 'none', borderRadius: 8, padding: '10px 22px', cursor: 'pointer', fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 10px 20px -10px rgba(67, 97, 238, 0.4)' }}>
                  View Details <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </div>
              {/* Rocket illustration */}
              <div style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', width: 180 }}>
                <svg width="180" height="180" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M120 40C120 40 180 80 180 140C180 200 120 220 120 220C120 220 60 200 60 140C60 80 120 40 120 40Z" fill="#e7515a" />
                  <path d="M120 40C120 40 150 70 150 140C150 200 120 220 120 220V40Z" fill="#ff6b6b" />
                  <circle cx="120" cy="110" r="15" fill="#fff" opacity="0.8" />
                  <path d="M60 140C60 140 30 150 20 180L60 190V140Z" fill="#1b2e4b" />
                  <path d="M180 140C180 140 210 150 220 180L180 190V140Z" fill="#1b2e4b" />
                  <path d="M120 220C120 230 100 240 120 240C140 240 120 230 120 220Z" fill="#ffbb44" />
                </svg>
              </div>
            </div>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 15 }}>
              {/* Total Projects */}
              <div style={{ background: '#fff', borderRadius: 12, padding: '20px', display: 'flex', alignItems: 'center', gap: 15, position: 'relative', overflow: 'hidden', border: '1px solid #e0e6ed' }}>
                <div style={{ width: 50, height: 50, background: 'rgba(67, 97, 238, 0.1)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#4361ee' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                </div>
                <div style={{ zIndex: 1 }}>
                  <div style={{ color: '#0e1726', fontWeight: 700, fontSize: 13 }}>Total Projects</div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: '#0e1726' }}>7,522</div>
                </div>
                <MiniArea color="#4361ee" />
              </div>
              {/* Completed */}
              <div style={{ background: '#fff', borderRadius: 12, padding: '20px', display: 'flex', alignItems: 'center', gap: 15, position: 'relative', overflow: 'hidden', border: '1px solid #e0e6ed' }}>
                <div style={{ width: 50, height: 50, background: 'rgba(0, 171, 85, 0.1)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#00ab55' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div style={{ zIndex: 1 }}>
                  <div style={{ color: '#0e1726', fontWeight: 700, fontSize: 13 }}>Completed Projects</div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: '#0e1726' }}>5,506</div>
                </div>
                <MiniArea color="#00ab55" />
              </div>
              {/* Overdue */}
              <div style={{ background: '#fff', borderRadius: 12, padding: '20px', display: 'flex', alignItems: 'center', gap: 15, border: '1px solid #e0e6ed' }}>
                <div style={{ width: 50, height: 50, background: 'rgba(226, 160, 63, 0.1)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#e2a03f' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div>
                  <div style={{ color: '#0e1726', fontWeight: 700, fontSize: 13 }}>Overdue Projects</div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: '#0e1726' }}>105</div>
                </div>
              </div>
              {/* Upcoming */}
              <div style={{ background: '#fff', borderRadius: 12, padding: '20px', display: 'flex', alignItems: 'center', gap: 15, border: '1px solid #e0e6ed' }}>
                <div style={{ width: 50, height: 50, background: 'rgba(231, 81, 90, 0.1)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#e7515a' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </div>
                <div>
                  <div style={{ color: '#0e1726', fontWeight: 700, fontSize: 13 }}>Upcoming Projects</div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: '#0e1726' }}>15</div>
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE SECTION: Project Statistics + Calendar */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20, marginBottom: 25 }}>
            {/* Project Statistics Bar Chart */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '20px', border: '1px solid #e0e6ed', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 25 }}>
                <span style={{ fontWeight: 700, fontSize: 16, color: '#0e1726' }}>Project Statistics</span>
                <div style={{ display: 'flex', gap: 12, color: '#888ea8' }}>
                  <svg style={{ cursor: 'pointer' }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                  <svg style={{ cursor: 'pointer' }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                  <svg style={{ cursor: 'pointer' }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                  <svg style={{ cursor: 'pointer' }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 15 }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: 35, paddingRight: 5, color: '#888ea8', fontSize: 11, textAlign: 'right', minWidth: 20 }}>
                  {[30, 20, 10, 0].map(v => <span key={v}>{v}</span>)}
                </div>
                <div style={{ flex: 1 }}>
                  {/* Bars */}
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, height: 220, position: 'relative' }}>
                    {/* Grid lines */}
                    {[0, 33, 66, 100].map((pct, i) => (
                      <div key={i} style={{ position: 'absolute', left: 0, right: 0, bottom: `${pct}%`, borderTop: '1px dashed #f0f0f0', zIndex: 0 }} />
                    ))}
                    {barData.map((d, i) => (
                      <div key={i} style={{ display: 'flex', gap: 4, alignItems: 'flex-end', flex: 1, zIndex: 1, height: '100%' }}>
                        <div style={{ flex: 1, height: `${(d.complete / MAX_BAR) * 100}%`, background: '#e7515a', borderRadius: '4px 4px 0 0', position: 'relative' }}>
                          <div style={{ position: 'absolute', top: -15, left: 0, right: 0, textAlign: 'center', fontSize: 9, color: '#888ea8', opacity: 0 }}>{d.complete}</div>
                        </div>
                        <div style={{ flex: 1, height: `${(d.doing / MAX_BAR) * 100}%`, background: '#4361ee', borderRadius: '4px 4px 0 0', position: 'relative' }}>
                          <div style={{ position: 'absolute', top: -15, left: 0, right: 0, textAlign: 'center', fontSize: 9, color: '#888ea8', opacity: 0 }}>{d.doing}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* X-axis */}
                  <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
                    {barData.map((d, i) => (
                      <div key={i} style={{ flex: 1, textAlign: 'center', fontSize: 11, color: i === 4 ? '#4361ee' : '#888ea8', fontWeight: i === 4 ? 700 : 500 }}>{d.month}</div>
                    ))}
                  </div>
                  {/* Legend */}
                  <div style={{ display: 'flex', justifyContent: 'center', gap: 30, marginTop: 25 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#e7515a' }} />
                      <span style={{ fontSize: 13, color: '#3b3f5c', fontWeight: 600 }}>Complete</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#4361ee' }} />
                      <span style={{ fontSize: 13, color: '#3b3f5c', fontWeight: 600 }}>Doing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Summary Calendar */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '20px', border: '1px solid #e0e6ed', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <span style={{ fontWeight: 700, fontSize: 16, color: '#0e1726' }}>Project Summary</span>
                <svg style={{ cursor: 'pointer', color: '#888ea8' }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <h4 style={{ margin: 0, fontSize: 15, fontWeight: 800, color: '#0e1726' }}>SEPTEMBER 2023</h4>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid #e0e6ed', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888ea8' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                  </button>
                  <button style={{ width: 32, height: 32, borderRadius: 8, border: 'none', background: '#4361ee', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </button>
                </div>
              </div>
              {/* Day headers */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', marginBottom: 10 }}>
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
                  <div key={d} style={{ color: '#888ea8', fontSize: 12, fontWeight: 700, padding: '5px 0' }}>{d}</div>
                ))}
              </div>
              {/* Days */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {calendarDays.map((week, wi) => (
                  <div key={wi} style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center' }}>
                    {week.map((day, di) => {
                      const isOutside = (wi === 0 && day > 7) || (wi === 4 && day < 10);
                      const isToday = wi === 0 && di === 5 && day === 2; // Fixed 'today' highlight to match image
                      return (
                        <div key={di} style={{
                          padding: '8px 0', fontSize: 13, borderRadius: 100, cursor: 'pointer',
                          color: isOutside ? '#e0e6ed' : isToday ? '#fff' : '#3b3f5c',
                          background: isToday ? '#4361ee' : 'transparent',
                          fontWeight: isToday ? 800 : 700,
                          transition: 'all 0.2s'
                        }}>
                          {day}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION: Category + Stats Cards + Activities */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginBottom: 25 }}>
            {/* Project Category Donut */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '20px', border: '1px solid #e0e6ed', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 25, color: '#0e1726' }}>Project Category</div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 25 }}>
                <DonutChart />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {[
                  { color: '#4361ee', label: 'Web Design' },
                  { color: '#805dca', label: 'Graphics Design' },
                  { color: '#00ab55', label: 'UX/UI Design' },
                  { color: '#e2a03f', label: 'Brand Identity' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: item.color }} />
                    <span style={{ fontSize: 13, color: '#888ea8', fontWeight: 600 }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 15 }}>
              {/* Earning */}
              <div style={{ background: '#fff', borderRadius: 12, padding: '18px', position: 'relative', overflow: 'hidden', border: '1px solid #e0e6ed' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 15, zIndex: 1, position: 'relative' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 32, height: 32, background: 'rgba(0, 171, 85, 0.1)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00ab55' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    </div>
                    <span style={{ fontWeight: 700, color: '#3b3f5c', fontSize: 14 }}>Earning</span>
                  </div>
                  <svg style={{ cursor: 'pointer', color: '#888ea8' }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                </div>
                <div style={{ fontSize: 24, fontWeight: 800, color: '#0e1726', marginBottom: 5 }}>$20,125</div>
                <div style={{ fontSize: 12, color: '#00ab55', fontWeight: 700 }}>↗ 100% <span style={{ color: '#888ea8', fontWeight: 500 }}>vs last month</span></div>
                <MiniArea color="#00ab55" path="M0,40 Q30,20 60,35 T120,15 L120,50 L0,50 Z" />
              </div>
              {/* New Clients */}
              <div style={{ background: '#fff', borderRadius: 12, padding: '18px', position: 'relative', overflow: 'hidden', border: '1px solid #e0e6ed' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 15, zIndex: 1, position: 'relative' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 32, height: 32, background: 'rgba(231, 81, 90, 0.1)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e7515a' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <span style={{ fontWeight: 700, color: '#3b3f5c', fontSize: 14 }}>New Clients</span>
                  </div>
                  <svg style={{ cursor: 'pointer', color: '#888ea8' }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                </div>
                <div style={{ fontSize: 24, fontWeight: 800, color: '#0e1726', marginBottom: 5 }}>129</div>
                <div style={{ fontSize: 12, color: '#e7515a', fontWeight: 700 }}>↘ 99% <span style={{ color: '#888ea8', fontWeight: 500 }}>vs last month</span></div>
                <MiniArea color="#e7515a" path="M0,20 Q30,40 60,25 T120,35 L120,50 L0,50 Z" />
              </div>
              {/* Hours */}
              <div style={{ background: '#fff', borderRadius: 12, padding: '18px', position: 'relative', overflow: 'hidden', border: '1px solid #e0e6ed' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 15, zIndex: 1, position: 'relative' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 32, height: 32, background: 'rgba(67, 97, 238, 0.1)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4361ee' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </div>
                    <span style={{ fontWeight: 700, color: '#3b3f5c', fontSize: 14 }}>Hours</span>
                  </div>
                  <svg style={{ cursor: 'pointer', color: '#888ea8' }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                </div>
                <div style={{ fontSize: 24, fontWeight: 800, color: '#0e1726', marginBottom: 5 }}>154</div>
                <div style={{ fontSize: 12, color: '#4361ee', fontWeight: 700 }}>↗ 45% <span style={{ color: '#888ea8', fontWeight: 500 }}>vs This month</span></div>
                <MiniArea color="#4361ee" path="M0,45 Q40,15 80,35 T120,25 L120,50 L0,50 Z" />
              </div>
              {/* Employees */}
              <div style={{ background: '#fff', borderRadius: 12, padding: '18px', position: 'relative', overflow: 'hidden', border: '1px solid #e0e6ed' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 15, zIndex: 1, position: 'relative' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 32, height: 32, background: 'rgba(226, 160, 63, 0.1)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e2a03f' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
                    </div>
                    <span style={{ fontWeight: 700, color: '#3b3f5c', fontSize: 14 }}>Employees</span>
                  </div>
                  <svg style={{ cursor: 'pointer', color: '#888ea8' }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                </div>
                <div style={{ fontSize: 24, fontWeight: 800, color: '#0e1726', marginBottom: 5 }}>650</div>
                <div style={{ fontSize: 12, color: '#e2a03f', fontWeight: 700 }}>↗ 96% <span style={{ color: '#888ea8', fontWeight: 500 }}>vs last month</span></div>
                <MiniArea color="#e2a03f" path="M0,30 Q30,10 60,35 T120,5 L120,50 L0,50 Z" />
              </div>
            </div>

            {/* Activities Timeline */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '20px', border: '1px solid #e0e6ed', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 20, color: '#0e1726' }}>Activities</div>
              <div style={{ position: 'relative' }}>
                {activities.map((a, i) => (
                  <div key={i} style={{ display: 'flex', gap: 15, marginBottom: 25, position: 'relative', zIndex: 1 }}>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', overflow: 'hidden', border: '2px solid #fff', boxShadow: '0 0 10px rgba(0,0,0,0.1)', flexShrink: 0 }}>
                      <img src={a.img} alt={a.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontWeight: 800, color: '#0e1726', fontSize: 14 }}>{a.name}</span>
                      </div>
                      <div style={{ fontSize: 12, color: '#888ea8', marginBottom: 8, fontWeight: 600 }}>{a.time}</div>
                      {a.action && <div style={{ fontSize: 14, color: '#3b3f5c', fontWeight: 500 }}>{a.action} <span style={{ color: '#4361ee', fontWeight: 800 }}>{a.link}</span></div>}
                      {a.comment && <div style={{ background: '#f6f7f8', borderRadius: 8, padding: '10px 15px', fontSize: 13, color: '#3b3f5c', marginTop: 10, fontWeight: 500, lineHeight: 1.5 }}>{a.comment}</div>}
                      {a.file && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 12 }}>
                          <div style={{ background: '#f6f7f8', borderRadius: 10, padding: '8px 15px', fontSize: 13, color: '#3b3f5c', display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700 }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="#ff6b6b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" /></svg>
                            {a.file} <span style={{ color: '#888ea8', fontWeight: 500, fontSize: 12 }}>{a.size}</span>
                          </div>
                          <span style={{ background: 'rgba(67, 97, 238, 0.1)', color: '#4361ee', borderRadius: 6, padding: '4px 8px', fontSize: 12, fontWeight: 800 }}>{a.extra}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {/* Timeline Line */}
                <div style={{ position: 'absolute', left: 19, top: 20, bottom: 20, width: 2, background: '#f0f0f0', zIndex: 0, borderLeft: '2px dashed #e0e6ed' }} />
              </div>
            </div>
          </div>

          {/* ACTIVE PROJECTS TABLE + File Manager + Messages */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20, marginBottom: 25 }}>
            {/* Active Projects Table */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '20px', border: '1px solid #e0e6ed', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <span style={{ fontWeight: 700, fontSize: 16, color: '#0e1726' }}>Active Projects</span>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <span style={{ color: '#e2a03f', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>Export Report</span>
                  <div style={{ display: 'flex', background: '#f6f7f8', borderRadius: 6, padding: '2px' }}>
                    <button style={{ background: '#fff', border: 'none', borderRadius: 4, padding: '4px 8px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4361ee" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></button>
                    <button style={{ background: 'transparent', border: 'none', borderRadius: 4, padding: '4px 8px' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888ea8" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg></button>
                  </div>
                </div>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                  <thead>
                    <tr style={{ textAlign: 'left', borderBottom: '1px solid #f0f0f0' }}>
                      {['Project Name', 'Project Lead', 'Progress', 'Assignee', 'Status', 'Due Date'].map(h => (
                        <th key={h} style={{ padding: '12px 15px', color: '#3b3f5c', fontWeight: 700, fontSize: 12 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {activeProjects.map((p, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #f0f0f0' }}>
                        <td style={{ padding: '15px', color: '#0e1726', fontWeight: 700 }}>{p.name}</td>
                        <td style={{ padding: '15px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <img src={p.leadImg} alt={p.lead} style={{ width: 30, height: 30, borderRadius: '50%' }} />
                            <span style={{ color: '#515365', fontWeight: 600 }}>{p.lead}</span>
                          </div>
                        </td>
                        <td style={{ padding: '15px', minWidth: 120 }}>
                          <div style={{ background: '#ebedf2', borderRadius: 10, height: 6, width: '100%', position: 'relative' }}>
                            <div style={{ height: 6, borderRadius: 10, background: p.progressColor, width: `${p.progress}%`, boxShadow: `0 0 5px ${p.progressColor}44` }} />
                          </div>
                        </td>
                        <td style={{ padding: '15px' }}>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            {[1, 2, 3].map((_, j) => (
                              <img key={j} src={`https://i.pravatar.cc/150?u=${i}${j}`} alt="avatar" style={{ width: 26, height: 26, borderRadius: '50%', border: '2px solid #fff', marginLeft: j > 0 ? -10 : 0, objectFit: 'cover' }} />
                            ))}
                            {p.assignees > 3 && <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#4361ee', border: '2px solid #fff', marginLeft: -10, color: '#fff', fontSize: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>+{p.assignees - 3}</div>}
                          </div>
                        </td>
                        <td style={{ padding: '15px' }}>
                          <span style={{
                            background: p.status === 'Completed' ? 'rgba(0, 171, 85, 0.1)' : p.status === 'Pending' ? 'rgba(231, 81, 90, 0.1)' : 'rgba(67, 97, 238, 0.1)',
                            color: p.status === 'Completed' ? '#00ab55' : p.status === 'Pending' ? '#e7515a' : '#4361ee',
                            borderRadius: 6, padding: '4px 10px', fontSize: 11, fontWeight: 800
                          }}>{p.status}</span>
                        </td>
                        <td style={{ padding: '15px', color: '#515365', fontWeight: 600 }}>{p.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 15, marginTop: 25 }}>
                <button style={{ background: '#f6f7f8', border: '1px solid #e0e6ed', borderRadius: 8, padding: '8px 18px', cursor: 'pointer', fontSize: 13, color: '#888ea8', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 5 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline></svg> Prev
                </button>
                <button style={{ background: '#f6f7f8', border: '1px solid #e0e6ed', borderRadius: 8, padding: '8px 18px', cursor: 'pointer', fontSize: 13, color: '#888ea8', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 5 }}>
                  Next <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg>
                </button>
              </div>
            </div>

            {/* Right column: File Manager + Messages */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {/* File Manager */}
              <div style={{ background: '#fff', borderRadius: 12, padding: '20px', border: '1px solid #e0e6ed', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                  <span style={{ fontWeight: 700, fontSize: 16, color: '#0e1726' }}>File Manager</span>
                  <svg style={{ cursor: 'pointer', color: '#888ea8' }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 13, color: '#888ea8', marginBottom: 8, fontWeight: 600 }}>Total Size</div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: '#0e1726' }}>23.5 GB <span style={{ fontSize: 13, fontWeight: 500, color: '#888ea8' }}>used of 2TB</span></div>
                  <div style={{ height: 10, borderRadius: 10, background: '#f0f0f0', marginTop: 15, display: 'flex', overflow: 'hidden' }}>
                    <div style={{ width: '37%', background: '#4361ee' }} />
                    <div style={{ width: '25%', background: '#e2a03f' }} />
                    <div style={{ width: '28%', background: '#00ab55' }} />
                    <div style={{ width: '10%', background: '#e7515a' }} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 15 }}>
                  {[
                    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>, color: '#4361ee', label: 'Documents', size: '7.5 GB' },
                    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>, color: '#e2a03f', label: 'Videos', size: '5 GB' },
                    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>, color: '#00ab55', label: 'Archived', size: '12.8 GB' },
                    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>, color: '#e7515a', label: 'Images', size: '2.1 GB' },
                  ].map(f => (
                    <div key={f.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: f.color }}>{f.icon}</div>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: 13, color: '#3b3f5c' }}>{f.label}</div>
                        <div style={{ fontSize: 11, color: '#888ea8', fontWeight: 600 }}>{f.size}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Messages */}
              <div style={{ background: '#fff', borderRadius: 12, padding: '20px', border: '1px solid #e0e6ed', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                  <span style={{ fontWeight: 700, fontSize: 16, color: '#0e1726' }}>Messages</span>
                  <svg style={{ cursor: 'pointer', color: '#888ea8' }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                  {messages.map((m, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, overflow: 'hidden', flexShrink: 0 }}>
                        <img src={m.img} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontWeight: 800, fontSize: 13, color: '#0e1726' }}>{m.name}</span>
                          <span style={{ fontSize: 11, color: '#888ea8', fontWeight: 600 }}>{m.time}</span>
                        </div>
                        <div style={{ fontSize: 12, color: '#888ea8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: 500, marginTop: 2 }}>{m.msg}</div>
                      </div>
                      <div style={{ color: '#4361ee' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div style={{ textAlign: 'left', color: '#888ea8', fontSize: 13, padding: '10px 0 30px', fontWeight: 600 }}>
            © {new Date().getFullYear()}. Vristo All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}