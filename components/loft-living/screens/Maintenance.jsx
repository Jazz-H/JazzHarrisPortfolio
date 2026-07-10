import { useState } from "react";
import { FiCamera, FiCheck, FiChevronRight, FiTool, FiX } from "react-icons/fi";
import { BackHeader, DetailCard, FormCard, FormField, FormHead, PrimaryButton, StatusChip } from "../primitives";
import { CATEGORIES } from "../constants";

const STAGES = ["Submitted", "In progress", "Resolved"];

function stageIndex(status) {
  if (status === "Resolved") return 2;
  if (status === "In progress") return 1;
  return 0;
}

function NewRequestForm({ onAdd, onClose }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [urgent, setUrgent] = useState(false);
  const [okToEnter, setOkToEnter] = useState(true);
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState(null);

  function handlePhoto(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhoto({ url: URL.createObjectURL(file), name: file.name });
  }

  function removePhoto() {
    if (photo) URL.revokeObjectURL(photo.url);
    setPhoto(null);
  }

  function submit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({
      title: title.trim(),
      desc: desc.trim(),
      category,
      urgent,
      okToEnter,
      photoUrl: photo?.url ?? null,
    });
  }

  return (
    <FormCard onSubmit={submit}>
      <FormHead title="New request" onClose={onClose} />
      <FormField label="Issue">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Garbage disposal jammed" required />
      </FormField>
      <FormField label="Category">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </FormField>
      <div className="urgency" role="group" aria-label="Priority">
        <button type="button" className={!urgent ? "active" : ""} aria-pressed={!urgent} onClick={() => setUrgent(false)}>Standard</button>
        <button type="button" className={urgent ? "active urgent" : ""} aria-pressed={urgent} onClick={() => setUrgent(true)}>Urgent</button>
      </div>
      <FormField label="Details (optional)">
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} rows={3} placeholder="Anything the maintenance team should know" />
      </FormField>
      <label className="photo-label">
        Photo (optional)
        {photo ? (
          <div className="photo-preview">
            <img src={photo.url} alt="" />
            <button type="button" onClick={removePhoto} aria-label="Remove photo"><FiX aria-hidden="true" /></button>
          </div>
        ) : (
          <label className="photo-btn">
            <FiCamera aria-hidden="true" /> Add photo
            <input type="file" accept="image/*" onChange={handlePhoto} hidden />
          </label>
        )}
      </label>
      <label className="check-row">
        <input type="checkbox" checked={okToEnter} onChange={(e) => setOkToEnter(e.target.checked)} />
        OK to enter if I&rsquo;m not home
      </label>
      <PrimaryButton type="submit">Submit request</PrimaryButton>
      <style jsx>{`
        .urgency { display: flex; gap: 8px; }
        .urgency button { flex: 1; background: var(--ll-surface-2); border: 1px solid var(--ll-border); color: var(--ll-text-muted); font-size: 12px; font-weight: 700; padding: 9px; border-radius: 10px; cursor: pointer; }
        .urgency button.active { background: var(--ll-accent-soft); border-color: var(--ll-accent); color: var(--ll-accent-soft-ink); }
        .urgency button.active.urgent { background: var(--ll-danger-soft); border-color: var(--ll-danger); color: var(--ll-danger); }
        .photo-label { display: flex; flex-direction: column; gap: 8px; font-size: 11.5px; color: var(--ll-text-muted); }
        .photo-btn { display: inline-flex; align-items: center; gap: 8px; background: var(--ll-surface-2); border: 1px dashed var(--ll-border); color: var(--ll-text-muted); font-size: 12px; font-weight: 600; padding: 10px 14px; border-radius: 10px; cursor: pointer; width: fit-content; }
        .photo-btn :global(svg) { width: 15px; height: 15px; }
        .photo-preview { position: relative; width: 84px; height: 84px; }
        .photo-preview img { width: 100%; height: 100%; object-fit: cover; border-radius: 10px; border: 1px solid var(--ll-border); }
        .photo-preview button { position: absolute; top: -8px; right: -8px; width: 24px; height: 24px; border-radius: 999px; background: var(--ll-surface); border: 1px solid var(--ll-border); color: var(--ll-text); display: flex; align-items: center; justify-content: center; cursor: pointer; }
        .photo-preview button :global(svg) { width: 12px; height: 12px; }
        .check-row { display: flex; flex-direction: row; align-items: center; gap: 8px; font-size: 12px; color: var(--ll-text-muted); }
        .check-row input { width: auto; padding: 0; accent-color: var(--ll-accent); }
      `}</style>
    </FormCard>
  );
}

function RequestTimeline({ request }) {
  const stage = stageIndex(request.status);
  return (
    <div className="tcard">
      {STAGES.map((label, i) => {
        const reached = i <= stage;
        const isLast = i === STAGES.length - 1;
        return (
          <div className="tstep" key={label}>
            <div className="trail">
              <span className={"tdot" + (reached ? " done" : "")}>{reached && <FiCheck aria-hidden="true" />}</span>
              {!isLast && <span className={"tbar" + (i < stage ? " done" : "")} />}
            </div>
            <div className="tbody">
              <div className={"tlabel" + (reached ? " done" : "")}>{label}</div>
              {label === "Submitted" && <div className="tdate">{request.date}</div>}
              {label === "Resolved" && reached && request.resolvedDate && (
                <div className="tdate">{request.resolvedDate}</div>
              )}
              {label === "Resolved" && reached && request.resolution && (
                <div className="tnote">{request.resolution}</div>
              )}
            </div>
          </div>
        );
      })}
      <style jsx>{`
        .tcard { background: var(--ll-surface); border: 1px solid var(--ll-border); border-radius: 14px; padding: 18px 20px; margin-top: 16px; }
        .tstep { display: flex; gap: 12px; }
        .trail { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
        .tdot { width: 20px; height: 20px; border-radius: 999px; background: var(--ll-surface-2); border: 1.5px solid var(--ll-border); display: flex; align-items: center; justify-content: center; color: var(--ll-accent-ink); flex-shrink: 0; }
        .tdot.done { background: var(--ll-accent); border-color: var(--ll-accent); }
        .tdot :global(svg) { width: 11px; height: 11px; }
        .tbar { width: 2px; flex: 1; min-height: 22px; background: var(--ll-border); margin: 2px 0; }
        .tbar.done { background: var(--ll-accent); }
        .tbody { padding-bottom: 18px; }
        .tstep:last-child .tbody { padding-bottom: 0; }
        .tlabel { font-size: 12.5px; font-weight: 700; color: var(--ll-text-faint); padding-top: 1px; }
        .tlabel.done { color: var(--ll-text); }
        .tdate { font-size: 11px; color: var(--ll-text-muted); margin-top: 2px; }
        .tnote { font-size: 12px; color: var(--ll-text-muted); margin-top: 6px; line-height: 1.5; background: var(--ll-surface-2); border-radius: 8px; padding: 10px 12px; }
      `}</style>
    </div>
  );
}

function RequestDetail({ request, onBack, onCancel }) {
  const rows = [
    ["Category", request.category || "General"],
    ["Priority", request.urgent ? "Urgent" : "Standard"],
    ["OK to enter", request.okToEnter ? "Yes" : "No"],
  ];
  const cancellable = request.status === "Submitted" || request.status === "In progress";
  return (
    <div className="screen">
      <BackHeader title="Request details" onBack={onBack} />
      <div className="dheader">
        {request.photoUrl ? (
          <img className="dphoto" src={request.photoUrl} alt="" />
        ) : (
          <div className="dicon" aria-hidden="true"><FiTool /></div>
        )}
        <div className="dtitle">{request.title}</div>
        <div className="dstatus"><StatusChip status={request.status} /></div>
      </div>
      {request.status === "Cancelled" ? (
        <div className="cancelled-note">This request was cancelled.</div>
      ) : (
        <RequestTimeline request={request} />
      )}
      <DetailCard rows={rows}>
        {request.desc && (
          <div className="ddesc">
            <div className="ddesc-label">Details</div>
            <div className="ddesc-text">{request.desc}</div>
          </div>
        )}
      </DetailCard>
      {cancellable && (
        <button type="button" className="cancel-btn" onClick={() => onCancel(request.id)}>
          Cancel request
        </button>
      )}
      <style jsx>{`
        .screen { padding: 4px 20px 40px; }
        .dheader { background: var(--ll-surface); border: 1px solid var(--ll-border); border-radius: 14px; padding: 22px; margin-top: 16px; text-align: center; }
        .dicon, .dphoto { width: 56px; height: 56px; border-radius: 14px; margin: 0 auto 14px; }
        .dicon { background: var(--ll-surface-2); display: flex; align-items: center; justify-content: center; color: var(--ll-accent); }
        .dicon :global(svg) { width: 24px; height: 24px; }
        .dphoto { object-fit: cover; display: block; }
        .dtitle { font-size: 15px; font-weight: 700; color: var(--ll-text); }
        .dstatus { margin-top: 10px; }
        .cancelled-note { margin-top: 16px; font-size: 12.5px; color: var(--ll-text-faint); text-align: center; background: var(--ll-surface); border: 1px solid var(--ll-border); border-radius: 14px; padding: 16px; }
        .ddesc { padding: 14px 0 10px; }
        .ddesc-label { font-size: 10.5px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: var(--ll-text-faint); }
        .ddesc-text { font-size: 12.5px; color: var(--ll-text); margin-top: 6px; line-height: 1.5; }
        .cancel-btn { width: 100%; background: none; border: 1px solid var(--ll-danger); color: var(--ll-danger); font-size: 13px; font-weight: 700; padding: 13px; border-radius: 10px; margin-top: 16px; cursor: pointer; }
      `}</style>
    </div>
  );
}

export default function MaintenanceScreen({ requests, onAdd, onCancel, initialFormOpen }) {
  const [formOpen, setFormOpen] = useState(!!initialFormOpen);
  const [selectedId, setSelectedId] = useState(null);
  const selected = requests.find((r) => r.id === selectedId) || null;

  function handleAdd(data) {
    onAdd(data);
    setFormOpen(false);
  }

  if (selected) {
    return <RequestDetail request={selected} onBack={() => setSelectedId(null)} onCancel={onCancel} />;
  }

  return (
    <div className="screen">
      <h1>Maintenance requests</h1>
      {formOpen ? (
        <NewRequestForm onAdd={handleAdd} onClose={() => setFormOpen(false)} />
      ) : (
        <PrimaryButton onClick={() => setFormOpen(true)}>+ New request</PrimaryButton>
      )}
      <div className="list">
        {requests.map((r) => (
          <button type="button" className="row" key={r.id} onClick={() => setSelectedId(r.id)}>
            {r.photoUrl ? (
              <img className="thumb photo" src={r.photoUrl} alt="" />
            ) : (
              <div className="thumb" aria-hidden="true"><FiTool /></div>
            )}
            <div className="meta">
              <div className="rt">
                {r.title}
                {r.urgent && <span className="urgent-tag">Urgent</span>}
              </div>
              <div className="rs">
                {r.category ? `${r.category} · ` : ""}Submitted {r.date}
              </div>
            </div>
            <StatusChip status={r.status} />
            <FiChevronRight aria-hidden="true" className="rchev" />
          </button>
        ))}
      </div>
      <style jsx>{`
        .screen { padding: 4px 20px 40px; }
        h1 { font-size: 15px; font-weight: 700; margin: 6px 0 14px; color: var(--ll-text); }
        .list { margin-top: 14px; display: flex; flex-direction: column; gap: 10px; }
        .row { width: 100%; display: flex; align-items: center; gap: 12px; padding: 13px; background: var(--ll-surface); border: 1px solid var(--ll-border); border-radius: 12px; cursor: pointer; text-align: left; }
        .thumb { width: 40px; height: 40px; border-radius: 10px; background: var(--ll-surface-2); flex-shrink: 0; display: flex; align-items: center; justify-content: center; color: var(--ll-accent); }
        .thumb.photo { object-fit: cover; }
        .meta { min-width: 0; }
        .rt { font-size: 12.5px; font-weight: 700; color: var(--ll-text); display: flex; align-items: center; gap: 6px; }
        .urgent-tag { font-size: 9.5px; font-weight: 700; color: var(--ll-danger); background: var(--ll-danger-soft); padding: 2px 7px; border-radius: 999px; flex-shrink: 0; }
        .rs { font-size: 11px; color: var(--ll-text-muted); margin-top: 2px; }
        .rchev { width: 15px; height: 15px; color: var(--ll-text-faint); flex-shrink: 0; }
      `}</style>
    </div>
  );
}
