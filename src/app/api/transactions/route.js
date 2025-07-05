import { connectDB } from '../../../../lib/db';
import { Transaction } from '../../../../models/transaction';



export async function GET() {
  try {
    await connectDB();
    const transactions = await Transaction.find().sort({ date: -1 });
    return new Response(JSON.stringify(transactions), { status: 200 });
  } catch (error) {
    console.error('GET Error:', error);
    return new Response('Server error', { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const transaction = new Transaction(body);
    const saved = await transaction.save();
    return new Response(JSON.stringify(saved), { status: 201 });
  } catch (error) {
    console.error('POST Error:', error.message);
    console.error(error.stack);
    return new Response('Failed to create transaction', { status: 500 });
  }
}

