import React, { Component } from 'react';

interface State {
  count: number;
  logs: string[];
}

export class Solution5 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
      logs: [],
    };
  }

  // 1. componentDidMount вызывается 1 раз сразу после первого рендера
  componentDidMount() {
    console.log('[Solution5] Компонент смонтирован в DOM');
    this.setState({
      logs: [`[${new Date().toLocaleTimeString()}] Компонент успешно смонтирован`],
    });
  }

  // 2. componentDidUpdate вызывается при каждом обновлении state или props
  componentDidUpdate(prevProps: {}, prevState: State) {
    if (prevState.count !== this.state.count) {
      const time = new Date().toLocaleTimeString();
      const message = `[${time}] Значение счетчика изменилось с ${prevState.count} на ${this.state.count}`;
      
      this.setState({
        logs: [message, ...this.state.logs],
      });
    }
  }

  // 3. componentWillUnmount вызывается прямо перед удалением компонента из DOM
  componentWillUnmount() {
    console.log('[Solution5] Компонент размонтируется и удаляется из DOM');
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div className="demo-area">
        <h3 style={{ marginBottom: '1rem' }}>Классовый Счетчик с Журналом Событий</h3>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Счетчик: {this.state.count}</span>
          <button className="btn btn-secondary" onClick={this.handleDecrement}>-1</button>
          <button className="btn" onClick={this.handleIncrement}>+1</button>
        </div>

        <h4 style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Журнал (componentDidUpdate):</h4>
        <div style={{ maxHeight: '180px', overflowY: 'auto', background: 'var(--bg-secondary)', padding: '0.75rem', borderRadius: '6px' }}>
          <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
            {this.state.logs.map((log, index) => (
              <li key={index} style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                {log}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
