import { z } from "zod"

type LayerRef = string

export const base_event = z.object({
  edit_event_id: z.string(),
  in_progress: z.boolean().optional(),
  created_at: z.number(),
})

export const editComponentLocationEvent = base_event.extend({
  pcb_edit_event_type: z.literal("edit_component_location"),
  pcb_component_id: z.string(),
  original_center: z.object({ x: z.number(), y: z.number() }),
  new_center: z.object({ x: z.number(), y: z.number() }),
})

export type EditComponentLocationEvent = z.infer<
  typeof editComponentLocationEvent
>

export const editTraceHintEvent = base_event.extend({
  pcb_edit_event_type: z.literal("edit_trace_hint"),
  pcb_port_id: z.string(),
  pcb_trace_hint_id: z.string().optional(),
})

export type EditTraceHintEvent = z.infer<typeof editTraceHintEvent>

export type EditEvent = EditComponentLocationEvent | EditTraceHintEvent
