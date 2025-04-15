interface LoadingIndicatorProps {
    loadingState: string;
};

const LoadingIndicator = ({loadingState}: LoadingIndicatorProps) => {
    return <h3>{ loadingState }</h3>
};

export default LoadingIndicator;