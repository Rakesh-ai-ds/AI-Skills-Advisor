import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface FormattedMessageProps {
  text: string;
}

export function FormattedMessage({ text }: FormattedMessageProps) {
  // Parse the text to identify different sections
  const parseMessage = (message: string) => {
    const lines = message.split('\n');
    const sections: Array<{
      type: 'text' | 'header' | 'table' | 'list' | 'bold' | 'highlight';
      content: string | string[];
    }> = [];

    let i = 0;
    while (i < lines.length) {
      const line = lines[i].trim();
      
      // Skip empty lines
      if (!line) {
        i++;
        continue;
      }
      
      // Headers (## or #)
      if (line.startsWith('#')) {
        sections.push({
          type: 'header',
          content: line.replace(/^#+\s*/, '')
        });
        i++;
      }
      // Table detection (lines with |)
      else if (line.includes('|') && line.split('|').length > 2) {
        const tableLines = [line];
        i++;
        
        // Collect all table lines
        while (i < lines.length && lines[i].trim().includes('|')) {
          tableLines.push(lines[i].trim());
          i++;
        }
        
        sections.push({
          type: 'table',
          content: tableLines
        });
      }
      // List items (starting with *, -, or numbers)
      else if (line.match(/^[\*\-\d+\.]\s/)) {
        const listItems = [line];
        i++;
        
        // Collect all list items
        while (i < lines.length && lines[i].trim().match(/^[\*\-\d+\.]\s/)) {
          listItems.push(lines[i].trim());
          i++;
        }
        
        sections.push({
          type: 'list',
          content: listItems
        });
      }
      // Bold text (**text**)
      else if (line.includes('**')) {
        sections.push({
          type: 'bold',
          content: line
        });
        i++;
      }
      // Regular text
      else {
        sections.push({
          type: 'text',
          content: line
        });
        i++;
      }
    }
    
    return sections;
  };

  const renderTable = (tableLines: string[]) => {
    if (tableLines.length < 2) return null;
    
    const headers = tableLines[0].split('|').map(h => h.trim()).filter(h => h);
    const rows = tableLines.slice(2).map(row => 
      row.split('|').map(cell => cell.trim()).filter(cell => cell)
    );

    return (
      <div className="my-4 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              {headers.map((header, index) => (
                <TableHead key={index} className="font-semibold text-foreground">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <TableCell key={cellIndex} className="text-sm">
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };

  const renderList = (items: string[]) => (
    <ul className="my-3 space-y-1 ml-4">
      {items.map((item, index) => (
        <li key={index} className="text-sm flex items-start gap-2">
          <span className="text-primary mt-1">•</span>
          <span>{item.replace(/^[\*\-\d+\.]\s*/, '')}</span>
        </li>
      ))}
    </ul>
  );

  const renderBoldText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return (
      <p className="text-sm mb-2">
        {parts.map((part, index) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index} className="font-semibold text-primary">{part.slice(2, -2)}</strong>;
          }
          return part;
        })}
      </p>
    );
  };

  const sections = parseMessage(text);

  return (
    <div className="text-sm space-y-2">
      {sections.map((section, index) => {
        switch (section.type) {
          case 'header':
            return (
              <h4 key={index} className="font-bold text-primary text-base mb-2 pb-1 border-b border-border">
                {section.content as string}
              </h4>
            );
          case 'table':
            return renderTable(section.content as string[]);
          case 'list':
            return renderList(section.content as string[]);
          case 'bold':
            return renderBoldText(section.content as string);
          case 'text':
            const content = section.content as string;
            // Check if it's a highlight section (contains salary, growth, etc.)
            if (content.includes('LPA') || content.includes('Growth') || content.includes('Salary')) {
              return (
                <div key={index} className="bg-primary/5 border border-primary/20 rounded-lg p-3 my-2">
                  <p className="text-sm font-medium text-primary">{content}</p>
                </div>
              );
            }
            return (
              <p key={index} className="text-sm leading-relaxed">
                {content}
              </p>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}