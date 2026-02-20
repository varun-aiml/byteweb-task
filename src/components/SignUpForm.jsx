import { useNavigate } from 'react-router-dom';

export default function SignUpForm() {
  const navigate = useNavigate();

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      position: 'relative',
      overflow: 'hidden',
      padding: '0',
      fontFamily: "'Outfit', 'Nunito', sans-serif"
    }}>
      {/* Dynamic Background with Gradients and Map Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, #e0e7ff 0%, #fef2f2 50%, #f5f3ff 100%)',
        zIndex: 0
      }}>
        {/* Abstract Gradient Orbs */}
        <div style={{ position: 'absolute', top: '-10%', left: '20%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(67, 97, 238, 0.15) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '-5%', right: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(241, 7, 163, 0.1) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', top: '20%', right: '5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)', filter: 'blur(50px)' }} />

        {/* World Map Dotted Pattern (Simplified SVG) */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.15,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='1000' height='500' viewBox='0 0 1000 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 100 h2v2h-2z M150 120 h2v2h-2z M200 110 h2v2h-2z M250 130 h2v2h-2z M300 100 h2v2h-2z M350 140 h2v2h-2z M400 110 h2v2h-2z M450 150 h2v2h-2z M500 120 h2v2h-2z M550 160 h2v2h-2z M120 180 h2v2h-2z M170 200 h2v2h-2z M220 190 h2v2h-2z M270 210 h2v2h-2z M320 180 h2v2h-2z M370 220 h2v2h-2z M800 100 h2v2h-2z M850 120 h2v2h-2z M900 110 h2v2h-2z M780 180 h2v2h-2z M830 200 h2v2h-2z M880 190 h2v2h-2z' fill='%234361ee' /%3E%3C/svg%3E")`,
          backgroundSize: '100% 100%',
        }} />

        {/* Topographic Lines */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.2,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='1600' height='800' viewBox='0 0 1600 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-100 100 Q 200 50 400 150 T 900 100 T 1400 200' fill='none' stroke='%234361ee' stroke-width='0.5'/%3E%3Cpath d='M-100 200 Q 200 150 400 250 T 900 200 T 1400 300' fill='none' stroke='%234361ee' stroke-width='0.5'/%3E%3Cpath d='M1700 700 Q 1400 750 1200 650 T 700 700 T 200 600' fill='none' stroke='%23f107a3' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
        }} />
      </div>

      {/* Main Glassmorphism Card (Inheriting width from SignIn) */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '850px',
        height: '720px',
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '24px',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        position: 'relative',
        zIndex: 1,
        padding: '20px'
      }}>

        {/* Internal Content Wrapper - Centered to match image layout */}
        <div style={{ width: '100%', maxWidth: '480px', position: 'relative' }}>

          {/* Language Selector */}
          <div style={{
            position: 'absolute',
            top: '-60px',
            right: '-100px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#fff',
            borderRadius: '12px',
            padding: '8px 16px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '600',
            color: '#3b3f5c',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
          }}>
            <span style={{ fontSize: '18px' }}>🇺🇸</span> EN <span style={{ fontSize: '10px' }}>▼</span>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#4361ee', marginBottom: '12px', letterSpacing: '0.5px' }}>SIGN UP</h2>
            <p style={{ color: '#888ea8', fontSize: '15px', fontWeight: '500' }}>Enter your email and password to register</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} style={{ width: '100%' }}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#3b3f5c', marginBottom: '8px' }}>Name</label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#888ea8' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </span>
                <input
                  type="text"
                  placeholder="Enter Name"
                  style={{ width: '100%', padding: '14px 16px 14px 48px', border: '1px solid #e0e6ed', borderRadius: '12px', outline: 'none', fontSize: '14px', transition: 'all 0.3s', backgroundColor: '#fff' }}
                  onFocus={(e) => e.target.style.borderColor = '#4361ee'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e6ed'}
                />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#3b3f5c', marginBottom: '8px' }}>Email</label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#888ea8' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </span>
                <input
                  type="email"
                  placeholder="Enter Email"
                  style={{ width: '100%', padding: '14px 16px 14px 48px', border: '1px solid #e0e6ed', borderRadius: '12px', outline: 'none', fontSize: '14px', transition: 'all 0.3s', backgroundColor: '#fff' }}
                  onFocus={(e) => e.target.style.borderColor = '#4361ee'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e6ed'}
                />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#3b3f5c', marginBottom: '8px' }}>Password</label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#888ea8' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </span>
                <input
                  type="password"
                  placeholder="Enter Password"
                  style={{ width: '100%', padding: '14px 16px 14px 48px', border: '1px solid #e0e6ed', borderRadius: '12px', outline: 'none', fontSize: '14px', transition: 'all 0.3s', backgroundColor: '#fff' }}
                  onFocus={(e) => e.target.style.borderColor = '#4361ee'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e6ed'}
                />
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
              <input type="checkbox" id="newsletter" style={{ width: '20px', height: '20px', marginRight: '12px', accentColor: '#4361ee', cursor: 'pointer', border: '1px solid #e0e6ed', borderRadius: '4px' }} />
              <label htmlFor="newsletter" style={{ fontSize: '14px', color: '#888ea8', cursor: 'pointer', fontWeight: '500' }}>Subscribe to weekly newsletter</label>
            </div>

            <button style={{
              width: '100%',
              padding: '16px',
              background: 'linear-gradient(90deg, #e91e63 0%, #4361ee 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 10px 20px -10px rgba(67, 97, 238, 0.4)',
              transition: 'transform 0.2s',
              letterSpacing: '0.5px'
            }}
              onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              SIGN UP
            </button>
          </form>

          <div style={{ textAlign: 'center', margin: '30px 0', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', backgroundColor: 'rgba(224, 230, 237, 0.5)', zIndex: 0 }}></div>
            <span style={{ position: 'relative', backgroundColor: 'transparent', padding: '0 20px', color: '#888ea8', fontSize: '13px', fontWeight: '700', zIndex: 1, textTransform: 'uppercase' }}>OR</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '40px' }}>
            {[
              { id: 'insta', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><circle cx="12" cy="12" r="4"></circle><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>, gradient: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' },
              { id: 'fb', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>, gradient: 'linear-gradient(135deg, #3b5998 0%, #476bb8 100%)' },
              { id: 'tw', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>, gradient: 'linear-gradient(135deg, #000 0%, #333 100%)' },
              { id: 'google', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#fff" /></svg>, gradient: 'linear-gradient(135deg, #ea4335 0%, #fbbc05 100%)' }
            ].map((social) => (
              <div key={social.id} style={{ width: '42px', height: '42px', borderRadius: '50%', background: social.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer', transition: 'all 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
                {social.icon}
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', fontSize: '15px', color: '#3b3f5c', fontWeight: '500' }}>
            Already have an account ? {' '}
            <span onClick={() => navigate('/signin')} style={{ color: '#4361ee', fontWeight: '800', cursor: 'pointer', textDecoration: 'none' }}>
              SIGN IN
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
