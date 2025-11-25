import { defineTable, defineSchema } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  conversations: defineTable({
    userId: v.string(),
    threadId: v.string(),
    contactSessionId: v.id("contactSessions"),
    status: v.union(
      v.literal("unresolved"),
      v.literal("resolved"),
      v.literal("escalated")
    ),
  })
    .index("by_user_id", ["userId"])
    .index("by_contact_session_id", ["contactSessionId"])
    .index("by_thread_id", ["threadId"])
    .index("by_status_and_user_id", ["status", "userId"]),

  contactSessions: defineTable({
    userId: v.string(),
    name: v.string(),
    email: v.string(),
    expiredAt: v.number(),
    meta: v.optional(
      v.object({
        userAgent: v.optional(v.string()),
        referrer: v.optional(v.string()),
        language: v.optional(v.string()),
        timezone: v.optional(v.string()),
        timezoneOffset: v.optional(v.number()),
        screenResolution: v.optional(v.string()),
        viewPortSize: v.optional(v.string()),
      })
    ),
  })
    .index("by_user_id", ["userId"])
    .index("by_email", ["email"])
    .index("by_expired_at", ["expiredAt"]),

  users: defineTable({
    name: v.string(),
    email: v.string(),
  }).index("by_email", ["email"]),
});
