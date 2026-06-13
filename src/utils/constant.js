const USER_ROLES = {
  USER: "user",
  ADMIN: "admin",
  MANAGER: "manager",
};

const TASK_STATUS = {
  PENDING: "pending",
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
};

const TASK_PRIORITY = {
  HIGH: "high",
  MEDIUM: "medium",
  LOW: "low",
};

const PERMISSIONS = {
  admin: [
    "create_task",
    "update_task",
    "delete_task",
    "update_status",
    "manage_users",
  ],
  manager: ["create_task", "update_task", "update_status"],
  user: ["update_status"],
};

const ACTIONS = [
  "create_task",
  "update_task",
  "delete_task",
  "update_status",
  "manage_users",
  "create_workspace",
];

export { USER_ROLES, TASK_STATUS, TASK_PRIORITY, PERMISSIONS, ACTIONS };
