export const DEMO_WAKATIME_CARD = `
      <svg
        width="450"
        height="220"
        viewBox="0 0 450 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="descId"
      >
        <title id="titleId"></title>
        <desc id="descId"></desc>
        <style>
          .header {
            font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
            fill: #2f80ed;
            animation: fadeInAnimation 0.8s ease-in-out forwards;
          }
          @supports(-moz-appearance: auto) {
            /* Selector detects Firefox */
            .header { font-size: 15.5px; }
          }
          
    
    .stat {
      font: 600 14px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif; fill: #434d58;
    }
    @supports(-moz-appearance: auto) {
      /* Selector detects Firefox */
      .stat { font-size:12px; }
    }
    .stagger {
      opacity: 0;
      animation: fadeInAnimation 0.3s ease-in-out forwards;
    }
    .not_bold { font-weight: 400 }
    .bold { font-weight: 700 }
  
    @keyframes slideInAnimation {
      from {
        width: 0;
      }
      to {
        width: calc(100%-100px);
      }
    }
    @keyframes growWidthAnimation {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }
    .lang-name { font: 400 11px 'Segoe UI', Ubuntu, Sans-Serif; fill: #434d58 }
    #rect-mask rect{
      animation: slideInAnimation 1s ease-in-out forwards;
    }
    .lang-progress{
      animation: growWidthAnimation 0.6s ease-in-out forwards;
    }
    

          
      /* Animations */
      @keyframes scaleInAnimation {
        from {
          transform: translate(-5px, 5px) scale(0);
        }
        to {
          transform: translate(-5px, 5px) scale(1);
        }
      }
      @keyframes fadeInAnimation {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    
          
        </style>

        

        <rect
          data-testid="card-bg"
          x="0.5"
          y="0.5"
          rx="4.5"
          height="99%"
          stroke="#e4e2e2"
          width="449"
          fill="#fffefe"
          stroke-opacity="1"
        />

        
      <g
        data-testid="card-title"
        transform="translate(25, 35)"
      >
        <g transform="translate(0, 0)">
      <text
        x="0"
        y="0"
        class="header"
        data-testid="header"
      >WakaTime Stats (last year)</text>
    </g>
      </g>
    

        <g
          data-testid="main-card-body"
          transform="translate(0, 55)"
        >
          
    <svg x="0" y="0" width="100%">
      <g transform="translate(0, 0)">
    <g class="stagger" style="animation-delay: 450ms" transform="translate(25, 0)">
      <text class="stat bold" y="12.5" data-testid="Other">Other:</text>
      <text
        class="stat"
        x="305"
        y="12.5"
      >143 hrs 35 mins</text>
      
    <svg width="175" x="110" y="4">
      <rect rx="5" ry="5" x="0" y="0" width="175" height="8" fill="#434d58"></rect>
      <svg data-testid="lang-progress" width="67.3%">
        <rect
            height="8"
            fill="#2f80ed"
            rx="5" ry="5" x="0" y="0"
            class="lang-progress"
            style="animation-delay: 750ms;"
        />
      </svg>
    </svg>
  
    </g>
  </g><g transform="translate(0, 25)">
    <g class="stagger" style="animation-delay: 600ms" transform="translate(25, 0)">
      <text class="stat bold" y="12.5" data-testid="TypeScript">TypeScript:</text>
      <text
        class="stat"
        x="305"
        y="12.5"
      >25 hrs 21 mins</text>
      
    <svg width="175" x="110" y="4">
      <rect rx="5" ry="5" x="0" y="0" width="175" height="8" fill="#434d58"></rect>
      <svg data-testid="lang-progress" width="11.88%">
        <rect
            height="8"
            fill="#2f80ed"
            rx="5" ry="5" x="0" y="0"
            class="lang-progress"
            style="animation-delay: 900ms;"
        />
      </svg>
    </svg>
  
    </g>
  </g><g transform="translate(0, 50)">
    <g class="stagger" style="animation-delay: 750ms" transform="translate(25, 0)">
      <text class="stat bold" y="12.5" data-testid="PHP">PHP:</text>
      <text
        class="stat"
        x="305"
        y="12.5"
      >18 hrs 56 mins</text>
      
    <svg width="175" x="110" y="4">
      <rect rx="5" ry="5" x="0" y="0" width="175" height="8" fill="#434d58"></rect>
      <svg data-testid="lang-progress" width="8.88%">
        <rect
            height="8"
            fill="#2f80ed"
            rx="5" ry="5" x="0" y="0"
            class="lang-progress"
            style="animation-delay: 1050ms;"
        />
      </svg>
    </svg>
  
    </g>
  </g><g transform="translate(0, 75)">
    <g class="stagger" style="animation-delay: 900ms" transform="translate(25, 0)">
      <text class="stat bold" y="12.5" data-testid="Blade Template">Blade Template:</text>
      <text
        class="stat"
        x="305"
        y="12.5"
      >10 hrs 58 mins</text>
      
    <svg width="175" x="110" y="4">
      <rect rx="5" ry="5" x="0" y="0" width="175" height="8" fill="#434d58"></rect>
      <svg data-testid="lang-progress" width="5.14%">
        <rect
            height="8"
            fill="#2f80ed"
            rx="5" ry="5" x="0" y="0"
            class="lang-progress"
            style="animation-delay: 1200ms;"
        />
      </svg>
    </svg>
  
    </g>
  </g><g transform="translate(0, 100)">
    <g class="stagger" style="animation-delay: 1050ms" transform="translate(25, 0)">
      <text class="stat bold" y="12.5" data-testid="Vue.js">Vue.js:</text>
      <text
        class="stat"
        x="305"
        y="12.5"
      >7 hrs 31 mins</text>
      
    <svg width="175" x="110" y="4">
      <rect rx="5" ry="5" x="0" y="0" width="175" height="8" fill="#434d58"></rect>
      <svg data-testid="lang-progress" width="3.52%">
        <rect
            height="8"
            fill="#2f80ed"
            rx="5" ry="5" x="0" y="0"
            class="lang-progress"
            style="animation-delay: 1350ms;"
        />
      </svg>
    </svg>
  
    </g>
  </g><g transform="translate(0, 125)">
    <g class="stagger" style="animation-delay: 1200ms" transform="translate(25, 0)">
      <text class="stat bold" y="12.5" data-testid="JavaScript">JavaScript:</text>
      <text
        class="stat"
        x="305"
        y="12.5"
      >7 hrs 28 mins</text>
      
    <svg width="175" x="110" y="4">
      <rect rx="5" ry="5" x="0" y="0" width="175" height="8" fill="#434d58"></rect>
      <svg data-testid="lang-progress" width="3.51%">
        <rect
            height="8"
            fill="#2f80ed"
            rx="5" ry="5" x="0" y="0"
            class="lang-progress"
            style="animation-delay: 1500ms;"
        />
      </svg>
    </svg>
  
    </g>
  </g>
    </svg>
  
        </g>
      </svg>
    `;
