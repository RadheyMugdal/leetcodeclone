"use client";

import React, { useEffect, useState } from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpDown } from 'lucide-react';

const page = () => {
  const [problems, setProblems] = useState<any[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  useEffect(() => {
    const fetchProblems = async () => {
      const res = await axios.get("/api/getproblems");
      setProblems(res.data.data);
      console.log(res.data.data);
    };
    fetchProblems();
  }, []);

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: 'problem_no',
      header: 'No',
      cell: ({ row }) => <div className="font-medium">{row.original.problem_no}</div>,
    },
    {
      accessorKey: 'title',
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => (
        <Link href={`/problem/${row.original._id}`} className="hover:text-blue-600">
          {row.original.title}
        </Link>
      ),
    },
    {
      accessorKey: 'yt_video',
      header: 'Solution',
      cell: ({ row }) => (
        <Link href={row.original.yt_video} target="_blank">
          <Image src="/youtube.png" width={20} height={20} alt="youtube" />
        </Link>
      ),
    },
    {
      accessorKey: 'difficulty',
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Difficulty
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => {
        const difficulty = row.original.difficulty;
        const difficultyClass = difficulty === 'easy'
          ? 'text-green-400'
          : difficulty === 'medium'
          ? 'text-orange-400'
          : 'text-red-500';
        return <div className={difficultyClass}>{difficulty}</div>;
      },
    },
  ];

  const table = useReactTable({
    data: problems,
    columns,
    state: {
      sorting,
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
  });

  return (
    <div className="w-screen p-4">
      <h1 className="text-3xl text-center mb-5">Radhey's DSA Sheet 🔥</h1>
      <div className="w-[45%] m-auto p-6">
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter by title..."
            value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
            onChange={(event) =>
              table.getColumn('title')?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          
        </div>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default page;
