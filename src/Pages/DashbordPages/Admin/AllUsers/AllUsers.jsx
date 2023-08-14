import { useQuery } from "@tanstack/react-query";


const AllUsers = () => {
    const { isLoading, error, refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: () =>
            fetch('http://localhost:3000/users').then(
                (res) => res.json(),
            ),
    })

    return (
        <div>
            {users?.length}
        </div>
    );
};

export default AllUsers;