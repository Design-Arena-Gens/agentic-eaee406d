'use client';

import { useState } from 'react';

export default function EntraIDDiagram() {
  const [selectedScenario, setSelectedScenario] = useState(null);

  const scenarios = [
    {
      id: 'saml-sso',
      title: 'SAML-based SSO',
      color: '#0078D4',
      description: 'Enterprise apps with SAML 2.0 protocol'
    },
    {
      id: 'oidc-sso',
      title: 'OAuth/OIDC SSO',
      color: '#00A4EF',
      description: 'Modern apps with OAuth 2.0 and OpenID Connect'
    },
    {
      id: 'password-sso',
      title: 'Password-based SSO',
      color: '#50E6FF',
      description: 'Legacy apps with credential vaulting'
    },
    {
      id: 'linked-sso',
      title: 'Linked SSO',
      color: '#FFB900',
      description: 'Apps with external SSO providers'
    },
    {
      id: 'conditional-access',
      title: 'Conditional Access + MFA',
      color: '#FF8C00',
      description: 'Policy-based access control'
    },
    {
      id: 'sms-mfa',
      title: 'SMS/Phone MFA',
      color: '#E81123',
      description: 'Text message verification'
    },
    {
      id: 'authenticator-mfa',
      title: 'Authenticator App MFA',
      color: '#8764B8',
      description: 'Microsoft Authenticator or TOTP'
    },
    {
      id: 'fido2-mfa',
      title: 'FIDO2 Security Keys',
      color: '#00B294',
      description: 'Hardware-based passwordless'
    },
    {
      id: 'windows-hello',
      title: 'Windows Hello',
      color: '#107C10',
      description: 'Biometric authentication'
    },
    {
      id: 'certificate-mfa',
      title: 'Certificate-based Auth',
      color: '#5C2D91',
      description: 'Smart cards and certificates'
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <h1 style={{
          textAlign: 'center',
          color: '#0078D4',
          fontSize: '2.5rem',
          marginBottom: '10px',
          fontWeight: '600'
        }}>
          Microsoft Entra ID (Azure AD)
        </h1>
        <h2 style={{
          textAlign: 'center',
          color: '#666',
          fontSize: '1.5rem',
          marginBottom: '40px',
          fontWeight: '400'
        }}>
          SSO & MFA Integration Architecture
        </h2>

        {/* Main Diagram */}
        <svg width="100%" height="800" viewBox="0 0 1200 800" style={{ background: '#f8f9fa', borderRadius: '10px', marginBottom: '30px' }}>
          {/* Central Entra ID Hub */}
          <g>
            <circle cx="600" cy="400" r="100" fill="url(#grad1)" stroke="#0078D4" strokeWidth="4"/>
            <text x="600" y="390" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">Microsoft</text>
            <text x="600" y="415" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">Entra ID</text>
            <defs>
              <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style={{ stopColor: '#0078D4', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#005A9E', stopOpacity: 1 }} />
              </radialGradient>
            </defs>
          </g>

          {/* SSO Methods - Top Left Quadrant */}
          <g>
            <rect x="50" y="50" width="200" height="80" rx="10" fill="#0078D4" opacity="0.9"/>
            <text x="150" y="85" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">SAML 2.0 SSO</text>
            <text x="150" y="105" textAnchor="middle" fill="white" fontSize="12">Enterprise Apps</text>
            <line x1="250" y1="90" x2="520" y2="350" stroke="#0078D4" strokeWidth="3" strokeDasharray="5,5"/>
            <circle cx="250" cy="90" r="5" fill="#0078D4"/>
          </g>

          <g>
            <rect x="50" y="150" width="200" height="80" rx="10" fill="#00A4EF" opacity="0.9"/>
            <text x="150" y="185" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">OAuth/OIDC</text>
            <text x="150" y="205" textAnchor="middle" fill="white" fontSize="12">Modern Apps</text>
            <line x1="250" y1="190" x2="520" y2="370" stroke="#00A4EF" strokeWidth="3" strokeDasharray="5,5"/>
            <circle cx="250" cy="190" r="5" fill="#00A4EF"/>
          </g>

          <g>
            <rect x="50" y="250" width="200" height="80" rx="10" fill="#50E6FF" opacity="0.9"/>
            <text x="150" y="285" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Password SSO</text>
            <text x="150" y="305" textAnchor="middle" fill="white" fontSize="12">Legacy Apps</text>
            <line x1="250" y1="290" x2="510" y2="390" stroke="#50E6FF" strokeWidth="3" strokeDasharray="5,5"/>
            <circle cx="250" cy="290" r="5" fill="#50E6FF"/>
          </g>

          <g>
            <rect x="50" y="350" width="200" height="80" rx="10" fill="#FFB900" opacity="0.9"/>
            <text x="150" y="385" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Linked SSO</text>
            <text x="150" y="405" textAnchor="middle" fill="white" fontSize="12">External IdP</text>
            <line x1="250" y1="390" x2="500" y2="400" stroke="#FFB900" strokeWidth="3" strokeDasharray="5,5"/>
            <circle cx="250" cy="390" r="5" fill="#FFB900"/>
          </g>

          {/* MFA Methods - Right Side */}
          <g>
            <rect x="950" y="50" width="200" height="80" rx="10" fill="#E81123" opacity="0.9"/>
            <text x="1050" y="85" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">SMS/Phone</text>
            <text x="1050" y="105" textAnchor="middle" fill="white" fontSize="12">Text Message</text>
            <line x1="950" y1="90" x2="680" y2="350" stroke="#E81123" strokeWidth="3" strokeDasharray="5,5"/>
            <circle cx="950" cy="90" r="5" fill="#E81123"/>
          </g>

          <g>
            <rect x="950" y="150" width="200" height="80" rx="10" fill="#8764B8" opacity="0.9"/>
            <text x="1050" y="180" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Authenticator</text>
            <text x="1050" y="200" textAnchor="middle" fill="white" fontSize="12">App-based TOTP</text>
            <line x1="950" y1="190" x2="680" y2="370" stroke="#8764B8" strokeWidth="3" strokeDasharray="5,5"/>
            <circle cx="950" cy="190" r="5" fill="#8764B8"/>
          </g>

          <g>
            <rect x="950" y="250" width="200" height="80" rx="10" fill="#00B294" opacity="0.9"/>
            <text x="1050" y="285" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">FIDO2 Keys</text>
            <text x="1050" y="305" textAnchor="middle" fill="white" fontSize="12">Security Keys</text>
            <line x1="950" y1="290" x2="690" y2="390" stroke="#00B294" strokeWidth="3" strokeDasharray="5,5"/>
            <circle cx="950" cy="290" r="5" fill="#00B294"/>
          </g>

          <g>
            <rect x="950" y="350" width="200" height="80" rx="10" fill="#107C10" opacity="0.9"/>
            <text x="1050" y="385" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Windows Hello</text>
            <text x="1050" y="405" textAnchor="middle" fill="white" fontSize="12">Biometric</text>
            <line x1="950" y1="390" x2="700" y2="400" stroke="#107C10" strokeWidth="3" strokeDasharray="5,5"/>
            <circle cx="950" cy="390" r="5" fill="#107C10"/>
          </g>

          <g>
            <rect x="950" y="450" width="200" height="80" rx="10" fill="#5C2D91" opacity="0.9"/>
            <text x="1050" y="485" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Certificate Auth</text>
            <text x="1050" y="505" textAnchor="middle" fill="white" fontSize="12">Smart Cards</text>
            <line x1="950" y1="490" x2="690" y2="430" stroke="#5C2D91" strokeWidth="3" strokeDasharray="5,5"/>
            <circle cx="950" cy="490" r="5" fill="#5C2D91"/>
          </g>

          {/* Conditional Access Policy - Bottom */}
          <g>
            <rect x="400" y="650" width="400" height="100" rx="10" fill="#FF8C00" opacity="0.9"/>
            <text x="600" y="685" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Conditional Access Policies</text>
            <text x="600" y="710" textAnchor="middle" fill="white" fontSize="13">Location • Device State • Risk Level</text>
            <text x="600" y="730" textAnchor="middle" fill="white" fontSize="13">User/Group • Application • Time</text>
            <line x1="600" y1="650" x2="600" y2="500" stroke="#FF8C00" strokeWidth="4"/>
            <polygon points="600,500 590,520 610,520" fill="#FF8C00"/>
          </g>

          {/* User Flow - Bottom Left */}
          <g>
            <circle cx="150" cy="650" r="40" fill="#4CAF50" opacity="0.9"/>
            <text x="150" y="660" textAnchor="middle" fill="white" fontSize="28">👤</text>
            <text x="150" y="720" textAnchor="middle" fill="#333" fontSize="14" fontWeight="bold">User</text>
            <line x1="190" y1="650" x2="380" y2="650" stroke="#4CAF50" strokeWidth="3"/>
            <polygon points="380,650 365,640 365,660" fill="#4CAF50"/>
          </g>

          {/* Applications - Top Right */}
          <g>
            <circle cx="1050" cy="650" r="40" fill="#2196F3" opacity="0.9"/>
            <text x="1050" y="660" textAnchor="middle" fill="white" fontSize="28">📱</text>
            <text x="1050" y="720" textAnchor="middle" fill="#333" fontSize="14" fontWeight="bold">Applications</text>
            <line x1="820" y1="680" x2="1010" y2="650" stroke="#2196F3" strokeWidth="3"/>
            <polygon points="1010,650 998,657 1005,642" fill="#2196F3"/>
          </g>

          {/* Tokens */}
          <g>
            <rect x="550" y="520" width="100" height="40" rx="5" fill="#FFC107" opacity="0.9"/>
            <text x="600" y="545" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">JWT Token</text>
          </g>

          {/* Labels */}
          <text x="150" y="30" textAnchor="middle" fill="#333" fontSize="18" fontWeight="bold">SSO Protocols</text>
          <text x="1050" y="30" textAnchor="middle" fill="#333" fontSize="18" fontWeight="bold">MFA Methods</text>
        </svg>

        {/* Scenario Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginTop: '30px'
        }}>
          {scenarios.map((scenario) => (
            <div
              key={scenario.id}
              onClick={() => setSelectedScenario(scenario)}
              style={{
                background: `linear-gradient(135deg, ${scenario.color} 0%, ${scenario.color}dd 100%)`,
                borderRadius: '15px',
                padding: '25px',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: selectedScenario?.id === scenario.id
                  ? `0 8px 25px ${scenario.color}66`
                  : '0 4px 15px rgba(0,0,0,0.1)',
                transform: selectedScenario?.id === scenario.id ? 'scale(1.05)' : 'scale(1)',
                color: 'white'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = `0 8px 25px ${scenario.color}66`;
              }}
              onMouseLeave={(e) => {
                if (selectedScenario?.id !== scenario.id) {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                }
              }}
            >
              <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem' }}>{scenario.title}</h3>
              <p style={{ margin: 0, opacity: 0.95, fontSize: '0.9rem' }}>{scenario.description}</p>
            </div>
          ))}
        </div>

        {/* Integration Flow Details */}
        <div style={{
          marginTop: '40px',
          padding: '30px',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          borderRadius: '15px'
        }}>
          <h3 style={{ color: '#333', marginBottom: '20px', fontSize: '1.5rem' }}>Complete Integration Flow</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#4CAF50',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '18px'
              }}>1</div>
              <span style={{ color: '#333', fontSize: '1rem' }}>User attempts to access application</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#FF8C00',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '18px'
              }}>2</div>
              <span style={{ color: '#333', fontSize: '1rem' }}>Conditional Access policies evaluate (location, device, risk)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#0078D4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '18px'
              }}>3</div>
              <span style={{ color: '#333', fontSize: '1rem' }}>SSO protocol initiated (SAML/OAuth/OIDC)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#8764B8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '18px'
              }}>4</div>
              <span style={{ color: '#333', fontSize: '1rem' }}>MFA challenge presented based on policy</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#FFC107',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '18px'
              }}>5</div>
              <span style={{ color: '#333', fontSize: '1rem' }}>Token issued (JWT/SAML assertion)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#2196F3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '18px'
              }}>6</div>
              <span style={{ color: '#333', fontSize: '1rem' }}>User granted access to application</span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div style={{
          marginTop: '30px',
          padding: '20px',
          background: '#f8f9fa',
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '15px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '30px', height: '3px', background: '#0078D4', borderStyle: 'dashed' }}></div>
            <span style={{ color: '#666', fontSize: '0.9rem' }}>SSO Flow</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '30px', height: '3px', background: '#8764B8', borderStyle: 'dashed' }}></div>
            <span style={{ color: '#666', fontSize: '0.9rem' }}>MFA Flow</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '30px', height: '3px', background: '#FF8C00' }}></div>
            <span style={{ color: '#666', fontSize: '0.9rem' }}>Policy Enforcement</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '30px', height: '3px', background: '#4CAF50' }}></div>
            <span style={{ color: '#666', fontSize: '0.9rem' }}>User Journey</span>
          </div>
        </div>
      </div>
    </div>
  );
}
