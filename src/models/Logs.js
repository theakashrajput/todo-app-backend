import mongoose from "mongoose";

import { ACTIONS } from "../utils/constant";

const logSchema = new mongoose.Schema(
  {
    taskId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
    sessionUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    action: {
      type: String,
      enum: ACTIONS,
    },
    metadata: {
      type: Object,
    },
    workspaceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workspace",
    },
  },
  {
    timestamps: true,
  }
);

export const Log = mongoose.model("Log", logSchema);
