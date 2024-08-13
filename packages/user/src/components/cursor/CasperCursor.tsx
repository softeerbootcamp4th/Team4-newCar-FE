function CasperCursor() {
    return (
        <div
            className="custom-cursor-obj"
            style={{ zIndex: 999, position: 'absolute', backgroundColor: 'transparent', top: -35, left: -8, pointerEvents: 'none' }}
        >
            <img src="/cursor/cursor-100.png" alt="커서" style={{ pointerEvents: 'none' }} />
        </div>
    );
}
export default CasperCursor;
