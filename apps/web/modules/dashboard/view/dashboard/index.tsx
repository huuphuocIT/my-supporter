"use client";
import { useQuery, useMutation } from "convex/react";

import { api } from "@workspace/backend/api";

import { Button } from "@workspace/ui/components/button";
import { useCallback } from "react";

export const DashboardPage = () => {
  const users = useQuery(api.users.getAll);
  const addUser = useMutation(api.users.add);

  const handleAddUser = useCallback(
    ($event: React.MouseEvent<HTMLButtonElement>) => {
      $event.preventDefault();

      addUser({
        name: "John Doe",
        email: "iBx9d@example.com",
      });
    },
    [addUser]
  );

  return (
    <div className="px-5 space-y-2">
      <div className="space-x-2">
        {users?.map((user) => (
          <span key={user._id} className="whitespace-nowrap">
            ({user.name} / {user.email})
          </span>
        ))}
      </div>
      <Button size="sm" onClick={handleAddUser}>
        Button
      </Button>
    </div>
  );
};
