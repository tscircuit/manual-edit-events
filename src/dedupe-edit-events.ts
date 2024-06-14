import type { EditEvent } from "./edit-events-zod"

export const dedupeEditEvents = (events: EditEvent[]): EditEvent[] => {
  events.sort((a, b) => a.created_at - b.created_at)

  const dedupedEvents: EditEvent[] = []

  const portsWithTraceHints = new Set<string>()

  for (const event of events) {
    if (event.pcb_edit_event_type === "edit_trace_hint") {
      if (portsWithTraceHints.has(event.pcb_port_id)) {
        continue
      }
      dedupedEvents.push(event)
    } else {
      dedupedEvents.push(event)
    }
  }

  return dedupedEvents
}
