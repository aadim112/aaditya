import React from 'react';

const LightBulbToggle = ({ isDarkMode, setIsDarkMode }) => {
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div style={styles.container}>
      <button
        onClick={handleToggle}
        style={{
          ...styles.toggleButton,
          backgroundColor: isDarkMode ? '#374151' : '#fbbf24',
          borderColor: isDarkMode ? '#4b5563' : '#f59e0b',
        }}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        {/* Toggle slider */}
        <div
          style={{
            ...styles.slider,
            transform: isDarkMode ? 'translateX(32px)' : 'translateX(0px)',
            backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
            color: isDarkMode ? '#9ca3af' : '#d97706',
          }}
        >
          {/* Font Awesome Icons */}
          {isDarkMode ? (
            <i className="fas fa-moon" ></i>
          ) : (
            <i className="fas fa-sun"></i>
          )}
        </div>
        
        {/* Background icons for context */}
        <div style={styles.backgroundIcons}>
          <i 
            className="fas fa-sun"
            style={{
              ...styles.backgroundIcon,
              opacity: isDarkMode ? 0.4 : 0,
            }}
          ></i>
          <i 
            className="fas fa-moon"
            style={{
              ...styles.backgroundIcon,
              opacity: isDarkMode ? 0 : 0.4,
            }}
          ></i>
        </div>
      </button>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: '15px',
    right: '16px',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    transform:'rotate(90deg)'
  },
  toggleButton: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '64px',
    height: '32px',
    borderRadius: '9999px',
    transition: 'all 0.3s ease-in-out',
    border: '2px solid',
    cursor: 'pointer',
    outline: 'none',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  slider: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    transition: 'all 0.3s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  },
  backgroundIcons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: '6px',
    paddingRight: '6px',
  },
  backgroundIcon: {
    fontSize: '12px',
    transition: 'opacity 0.3s ease-in-out',
    transform:'rotate(270deg)'
  },
};

export default LightBulbToggle;