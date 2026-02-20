import { useNavigate } from 'react-router-dom';

export default function SignUpForm() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fafafa',
      position: 'relative',
      overflowY: 'auto',
      padding: '60px 20px',
      fontFamily: "'Outfit', 'Nunito', sans-serif"
    }}>
      {/* Background Graphic: Topographic Waves & World Map */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        opacity: 0.6,
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 1600 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-100 100 Q 200 50 400 150 T 900 100 T 1400 200 T 1700 100' fill='none' stroke='%234361ee' stroke-width='0.5' opacity='0.2'/%3E%3Cpath d='M-100 200 Q 200 150 400 250 T 900 200 T 1400 300 T 1700 200' fill='none' stroke='%234361ee' stroke-width='0.5' opacity='0.15'/%3E%3Cpath d='M-100 300 Q 200 250 400 350 T 900 300 T 1400 400 T 1700 300' fill='none' stroke='%234361ee' stroke-width='0.5' opacity='0.1'/%3E%3Cpath d='M1700 700 Q 1400 750 1200 650 T 700 700 T 200 600 T -100 700' fill='none' stroke='%23f107a3' stroke-width='0.5' opacity='0.2'/%3E%3Cpath d='M1700 600 Q 1400 650 1200 550 T 700 600 T 200 500 T -100 600' fill='none' stroke='%23f107a3' stroke-width='0.5' opacity='0.15'/%3E%3C/svg%3E"),
          url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 1000 500' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='100' cy='100' r='1' fill='%234361ee' opacity='0.1'/%3E%3Ccircle cx='150' cy='120' r='1' fill='%234361ee' opacity='0.1'/%3E%3Ccircle cx='200' cy='110' r='1' fill='%234361ee' opacity='0.1'/%3E%3Ccircle cx='250' cy='130' r='1' fill='%234361ee' opacity='0.1'/%3E%3Ccircle cx='300' cy='100' r='1' fill='%234361ee' opacity='0.1'/%3E%3Ccircle cx='350' cy='140' r='1' fill='%234361ee' opacity='0.1'/%3E%3Ccircle cx='400' cy='110' r='1' fill='%234361ee' opacity='0.1'/%3E%3Ccircle cx='450' cy='150' r='1' fill='%234361ee' opacity='0.1'/%3E%3Ccircle cx='500' cy='120' r='1' fill='%234361ee' opacity='0.1'/%3E%3Ccircle cx='550' cy='160' r='1' fill='%234361ee' opacity='0.1'/%3E%3Ccircle cx='120' cy='180' r='1' fill='%234361ee' opacity='0.1'/%3E%3Ccircle cx='170' cy='200' r='1' fill='%234361ee' opacity='0.1'/%3E%3Ccircle cx='220' cy='190' r='1' fill='%234361ee' opacity='0.1'/%3E%3Ccircle cx='270' cy='210' r='1' fill='%234361ee' opacity='0.1'/%3E%3Ccircle cx='320' cy='180' r='1' fill='%234361ee' opacity='0.1'/%3E%3Ccircle cx='370' cy='220' r='1' fill='%234361ee' opacity='0.1'/%3E%3Ccircle cx='800' cy='100' r='1' fill='%234361ee' opacity='0.1'/%3E%3Ccircle cx='850' cy='120' r='1' fill='%234361ee' opacity='0.1'/%3E%3Ccircle cx='900' cy='110' r='1' fill='%234361ee' opacity='0.1'/%3E%3Ccircle cx='780' cy='180' r='1' fill='%234361ee' opacity='0.1'/%3E%3Ccircle cx='830' cy='200' r='1' fill='%234361ee' opacity='0.1'/%3E%3Ccircle cx='880' cy='190' r='1' fill='%234361ee' opacity='0.1'/%3E%3C/svg%3E")
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />

      {/* Background abstract shapes */}
      <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(67, 97, 238, 0.1) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(231, 81, 90, 0.1) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0 }} />

      {/* Main card */}
      <div style={{
        background: '#fff',
        borderRadius: '12px',
        padding: '50px 70px',
        width: '90%',
        maxWidth: '540px',
        position: 'relative',
        zIndex: 1,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)'
      }}>

        {/* Language selector */}
        <div style={{ position: 'absolute', top: '30px', right: '30px', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '6px 12px', cursor: 'pointer', fontSize: '13px', fontWeight: '500', color: '#555' }}>
          <span style={{ fontSize: '16px' }}>🇺🇸</span> EN <span style={{ fontSize: '10px' }}>▼</span>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '30px', fontWeight: '800', color: '#4361ee', marginBottom: '8px' }}>SIGN UP</h2>
          <p style={{ color: '#888ea8', fontSize: '14px' }}>Enter your details to create an account</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#3b3f5c', marginBottom: '8px' }}>Name</label>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#888ea8' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </span>
              <input
                type="text"
                placeholder="Enter Name"
                style={{ width: '100%', padding: '12px 15px 12px 45px', border: '1px solid #e0e6ed', borderRadius: '8px', outline: 'none', fontSize: '14px', transition: 'all 0.3s' }}
                onFocus={(e) => e.target.style.borderColor = '#4361ee'}
                onBlur={(e) => e.target.style.borderColor = '#e0e6ed'}
              />
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#3b3f5c', marginBottom: '8px' }}>Email</label>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#888ea8' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </span>
              <input
                type="email"
                placeholder="Enter Email"
                style={{ width: '100%', padding: '12px 15px 12px 45px', border: '1px solid #e0e6ed', borderRadius: '8px', outline: 'none', fontSize: '14px', transition: 'all 0.3s' }}
                onFocus={(e) => e.target.style.borderColor = '#4361ee'}
                onBlur={(e) => e.target.style.borderColor = '#e0e6ed'}
              />
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#3b3f5c', marginBottom: '8px' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#888ea8' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </span>
              <input
                type="password"
                placeholder="Enter Password"
                style={{ width: '100%', padding: '12px 15px 12px 45px', border: '1px solid #e0e6ed', borderRadius: '8px', outline: 'none', fontSize: '14px', transition: 'all 0.3s' }}
                onFocus={(e) => e.target.style.borderColor = '#4361ee'}
                onBlur={(e) => e.target.style.borderColor = '#e0e6ed'}
              />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
            <input type="checkbox" id="newsletter" style={{ width: '18px', height: '18px', marginRight: '10px', accentColor: '#4361ee', cursor: 'pointer' }} />
            <label htmlFor="newsletter" style={{ fontSize: '14px', color: '#888ea8', cursor: 'pointer' }}>Subscribe to weekly newsletter</label>
          </div>

          <button style={{
            width: '100%',
            padding: '13px',
            background: 'linear-gradient(90deg, #f107a3 0%, #4361ee 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 10px 20px -10px rgba(67, 97, 238, 0.4)',
            transition: 'transform 0.2s'
          }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            SIGN UP
          </button>
        </form>

        <div style={{ textAlign: 'center', margin: '25px 0', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', backgroundColor: '#e0e6ed', zIndex: 0 }}></div>
          <span style={{ position: 'relative', backgroundColor: '#fff', padding: '0 15px', color: '#888ea8', fontSize: '12px', fontWeight: '700', zIndex: 1 }}>OR</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '30px' }}>
          {[
            {
              id: 'insta',
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              ),
              gradient: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
            },
            {
              id: 'fb',
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              ),
              gradient: 'linear-gradient(135deg, #3b5998 0%, #476bb8 100%)'
            },
            {
              id: 'tw',
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              ),
              gradient: 'linear-gradient(135deg, #000 0%, #333 100%)'
            },
            {
              id: 'google',
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#fff" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#fff" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#fff" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#fff" />
                </svg>
              ),
              gradient: 'linear-gradient(135deg, #ea4335 0%, #fbbc05 100%)'
            }
          ].map((social) => (
            <div
              key={social.id}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: social.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              {social.icon}
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', fontSize: '14px', color: '#3b3f5c' }}>
          Already have an account? {' '}
          <span onClick={() => navigate('/signin')} style={{ color: '#4361ee', fontWeight: '700', cursor: 'pointer', textDecoration: 'none' }}>
            SIGN IN
          </span>
        </p>
      </div>
    </div>
  );
}
