import { Html } from "@react-three/drei";

const Loader = () => {
    return (
        <Html center>
            <div style={{ textAlign: 'center', userSelect: 'none' }}>
                <div style={{
                    position: 'relative',
                    width: 56,
                    height: 56,
                    margin: '0 auto 12px',
                }}>
                    <div style={{
                        position: 'absolute', inset: 0,
                        border: '3px solid rgba(255,255,255,0.1)',
                        borderRadius: '50%',
                    }} />
                    <div style={{
                        position: 'absolute', inset: 0,
                        border: '3px solid transparent',
                        borderTopColor: '#3b82f6',
                        borderRadius: '50%',
                        animation: 'spin 0.9s linear infinite',
                    }} />
                    <div style={{
                        position: 'absolute', inset: 10,
                        border: '3px solid transparent',
                        borderTopColor: '#a78bfa',
                        borderRadius: '50%',
                        animation: 'spin 0.6s linear infinite reverse',
                    }} />
                    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                </div>
                <p style={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: 11,
                    fontFamily: 'monospace',
                    letterSpacing: '0.05em',
                }}>
                    Loading scene...
                </p>
            </div>
        </Html>
    );
};

export default Loader;
