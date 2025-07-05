import { connectDB } from '../../../../../lib/db';
import { Transaction } from '../../../../../models/transaction';

export async function DELETE(req, { params }) {
  await connectDB();
  await Transaction.findByIdAndDelete(params.id);
  return Response.json({ success: true });
}

export async function PUT(req, { params }) {
  const data = await req.json();
  await connectDB();
  const updated = await Transaction.findByIdAndUpdate(params.id, data, { new: true });
  return Response.json(updated);
}
