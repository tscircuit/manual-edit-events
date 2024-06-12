import { z } from "zod"

type LayerRef = string

export const editComponentLocationEvent = z.object({
  edit_event_id: z.string(),
  pcb_edit_event_type: z.literal("edit_component_location"),
  pcb_component_id: z.string(),
  original_center: z.object({ x: z.number(), y: z.number() }),
  new_center: z.object({ x: z.number(), y: z.number() }),
  in_progress: z.boolean().optional(),
  created_at: z.number(),
})

export type EditComponentLocationEvent = {
  edit_event_id: string
  pcb_edit_event_type: "edit_component_location"
  pcb_component_id: string
  original_center: { x: number; y: number }
  new_center: { x: number; y: number }
  in_progress?: boolean
  created_at: number
}

export type EditTraceHintEvent = {
  edit_event_id: string
  pcb_edit_event_type: "edit_trace_hint"
  pcb_port_id: string
  pcb_trace_hint_id?: string
  route: Array<{ x: number; y: number; via?: boolean; to_layer?: LayerRef }>
  in_progress?: boolean
  created_at: number
}

export type EditEvent = EditComponentLocationEvent | EditTraceHintEvent
