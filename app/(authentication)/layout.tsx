const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="flex min-h-screen bg-[#111827] justify-center items-center">
            {children}
        </div>
    )
}


export default AuthLayout;