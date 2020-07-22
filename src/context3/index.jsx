import React from 'react';

const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
  };

// Theme context，默认的 theme 是 “light” 值，默认值只有在没有Provider的情况下才会生效
const ThemeContext = React.createContext('light');

// 用户登录 context
const UserContext = React.createContext({
  name: 'Guest',
});

// 一个组件可能会消费多个 context
function Content() {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <UserContext.Consumer>
                    {user => (
                        <button style={{backgroundColor: theme.background, color: theme.foreground}}>
                            {user.name}
                        </button>
                    )}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}


function Layout() {
    return (
        <div>
            <Content />
        </div>
    );
}

class MultiContextPage extends React.Component {
    render() {
        // 提供初始 context 值的 App 组件
        return (
            <ThemeContext.Provider value={themes.dark}>
                <UserContext.Provider value={{name:'马江林'}}>
                    <Layout />
                </UserContext.Provider>
            </ThemeContext.Provider>
        );
    }
}


export default MultiContextPage;

