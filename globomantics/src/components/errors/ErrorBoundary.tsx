import React from "react";

interface ErrorBoundaryProps {
    fallback: React.ReactNode;
    children?: React.ReactNode;
  }

  /**
   * Error boundaries can only be created using a class component.
   */
class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log(error, errorInfo);
    }

    render(): React.ReactNode {
        if (this.state.hasError) {
            return <h4>{this.props.fallback}</h4>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;