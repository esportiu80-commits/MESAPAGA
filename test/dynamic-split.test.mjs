import test from "node:test";
import assert from "node:assert/strict";

function shares(total,people){
  const base=Math.floor(total/people),extra=total%people;
  return Array.from({length:people},(_,i)=>base+(i<extra?1:0));
}

for(const people of [2,3,5,10,15,20]){
  test(`split 4850 cents exactly across ${people} diners`,()=>{
    const result=shares(4850,people);
    assert.equal(result.length,people);
    assert.equal(result.reduce((a,b)=>a+b,0),4850);
    assert.ok(Math.max(...result)-Math.min(...result)<=1);
  });
}
