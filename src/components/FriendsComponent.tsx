import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/Store"; // Adjust these imports based on your setup
import { getFriends } from "../redux/slices/FriendSlice";
import { BsThreeDots } from "react-icons/bs";
import Profile from "../assets/profile.jpg";

const Friends: React.FC<{ onFriendClick: (id: string) => void }> = ({ onFriendClick }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { datalist: friends, loading, errorMessage } = useSelector(
        (state: RootState) => state.friend
    );

    useEffect(() => {
        dispatch(getFriends());
    }, [dispatch]);

    if (loading) return <div>Loading friends...</div>;
    if (errorMessage) return <div>Error: {errorMessage}</div>;

    return (
        <div className="mt-14 m-5">
            {friends.map((friend: any, index: number) => (
                <div
                    key={index}
                    onClick={()=>onFriendClick(friend.requesterId?._id||friend.receiverId?._id )}
                    className="flex w-full items-center h-fit cursor-pointer justify-between py-3 px-7 rounded-lg"
                >
                    <div className="flex w-full items-center">
                        <div className="relative left-11 bottom-5">
                            <div className="rounded-full bg-green-600 p-1.5"></div>
                        </div>
                        <img
                            src={friend.profileImage || Profile}
                            alt={friend.name || "User"}
                            className="w-10 h-10 rounded-lg mr-3"
                        />
                        <div>
                            <p className="text-sm font-medium">{friend.requesterId?.name?friend.requesterId.name:friend.receiverId.name}</p>
                            <p className="text-xs text-gray-500">{friend.status || "Available"}</p>
                        </div>
                    </div>
                    <button className="text-gray-400">
                        <BsThreeDots />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Friends;
