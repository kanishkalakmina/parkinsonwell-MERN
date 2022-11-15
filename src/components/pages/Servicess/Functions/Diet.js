import React from 'react';
import "../Functions/Diet.css"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Divider, responsiveFontSizes } from '@mui/material';
import { blue } from '@mui/material/colors';
import img from '../../../../imagess/img-1.jpg'
import breakfast from '../../../../imagess/breakfast.png'
import snacks from '../../../../imagess/snacks.png'
import lunch from '../../../../imagess/lunch1.png'
import dinner from '../../../../imagess/dinner.png'
import { SpaceBar } from '@mui/icons-material';


const Item = styled(Paper)(({ theme }) => ({
   
    ...theme.typography.body2,
    padding: theme.spacing(6),
    textAlign: 'justify',
    color: theme.palette.text.secondary,
  }));

export default function Diet(){
    return (
       <div className='container'>
       
           
    <Box sx={{ width: 1 }}>
    
    
    <div style={{height:"20px"}}/>
    
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={4}>
        
      
        <Box gridColumn="span 8">
        
          
          <div>
            <h4 style={{color:"rgb(182, 213, 77)"}}>Breakfast Menu One (For the people using levodopa)</h4>
            <div style={{height:"20px"}}/>
            <p className='para'>
            <p>For the body, brain and nervous system: Wheat or oat cereal, milk, fruit (and fruit juice), whole-grain bread, turkey, cheese, egg, nuts, shrimp, vegetables, brown rice, dried dates and figs.</p>
            <div style={{height:"20px"}}/>
            <p>• Prebiotic foods: Whole-wheat, banana, lettuce, peanuts, cashew nuts, onion. </p>
            <p>• Probiotic foods: Water kefir, fermented pickle, miso soup, kimchi.</p> 
            <div style={{height:"20px"}}/>
            <Box className='box-1'>
            <p>• Whole-grain hot cereal such as oatmeal, cooked barley flakes, or Seven-Grain Cereal</p>
            <p>• Milk (if sensitive to milk protein, choose a milk alternative such as almond, soy, or rice milk)</p>
            <p>• Fruit juice (unsweetened)</p>
            <p>• Coffee or tea</p>
            </Box>
            </p>
          </div>

          <div style={{height:"40px"}}/>

          <div>
            <h4 style={{color:"rgb(142, 100, 170)"}}>Breakfast Menu Two</h4>
            <div style={{height:"20px"}}/>
            <p className='para'>
            <p>For the body, brain and nervous system: Eggs, sausage, whole-grain bread, yoghurt, banana, fruit (and fruit juice), whole-grain crackers, peanut or almond butter, lentil or split pea soup, cheese, olives, popcorn, salmon, quinoa or baked potato, asparagus, tomato, whole-grain dinner roll, cantaloupe.</p>
            <div style={{height:"20px"}}/>
            <p>• Prebiotic foods: Whole-wheat toast, banana, peanut butter, lentil or split pea soup, asparagus, tomato. </p>
            <p>• Probiotic foods: Yoghurt, sauerkraut.</p> 
            <div style={{height:"20px"}}/>
            <Box className='box-2'>
            <p>• Fried or poached egg</p>
            <p>• Sausage patty</p>
            <p>• Whole-wheat toast with butter</p> 
            <p>• Yoghurt with sliced banana</p>
            <p>• Fruit juice</p>
            <p>• Coffee or tea</p>
            </Box>
            </p>
          </div>

          <div style={{height:"40px"}}/>

          <div>
            <h4 style={{color:"rgb(182, 213, 77)"}}>Breakfast Menu Three (For the people using rasagiline)</h4>
            <div style={{height:"20px"}}/>
            <p className='para'>
            <p>For the body, brain and nervous system: Oatmeal, milk, whole-wheat toast, whole-wheat blueberry muffin, tuna, whole-wheat bread, raw vegetables, milk or vegetable juice, yoghurt, banana, beef, Brussels sprouts, sweet potato, whole-grain dinner roll, baked apple.</p>
            <div style={{height:"20px"}}/>
            <p>• Prebiotic foods: Oatmeal, whole-wheat toast, muffin, bread, banana, sweet potato. </p>
            <p>• Probiotic foods: Yoghurt.</p> 
            <div style={{height:"20px"}}/>
            <Box className='box-1'>
            <p>• Oatmeal with milk</p>
            <p>• Orange juice (fresh, or frozen and reconstituted)</p>
            <p>• Coffee or tea</p>
            </Box>
           
            </p>           
          </div>  

          <div style={{height:"40px"}}/>    

          <div>
            <h4 style={{color:"rgb(142, 100, 170)"}}>Breakfast Menu Four</h4>
            <div style={{height:"20px"}}/>
            <p className='para'>
            <p>For the body, brain and nervous system: Eggs, sausage, whole-wheat toast, berry compote, cottage cheese, cantaloupe, vegetable soup, whole-grain crackers, milk or vegetable juice, yoghurt, banana, shrimp, whole-grain linguine, spinach, carrots, garlic bread, chocolate.</p>
            <div style={{height:"20px"}}/>
            <p>• Prebiotic foods: Whole-wheat toast, vegetable soup with legumes, banana, garlic, chocolate. </p>
            <p>• Probiotic foods: Yoghurt.</p> 
            <div style={{height:"20px"}}/>
            <Box className='box-2'>
            <p>• Eggs (cooked as you like)</p>
            <p>• Fresh sausage</p>
            <p>• Whole-wheat toast with butter</p>
            <p>• Mixed berry compote (fresh, or thawed from frozen)</p>
            <p>• Coffee or tea</p>
            </Box>
            <div style={{height:"70px"}}/>
            </p>           
          </div> 

        </Box>     
        <Box gridColumn="span 4">
         <img style={{with:"100%",maxWidth:"100%",maxHeight:"70%" ,height:"auto" }} src={breakfast} alt = "Breakfast"/>   
        </Box>
        
  

        <Box gridColumn="span 4">
        <img style={{with:"100%",maxWidth:"70%",maxHeight:"60%" ,height:"auto" }} src={snacks} alt = "Snacks"/> 
        
        </Box>
        <Box gridColumn="span 8">
          <div>
            <h4 style={{color:"rgb(194, 121, 36)"}}>Snacks Menu One (For the people using levodopa)</h4>
            <div style={{height:"20px"}}/>
            <p className='para'>
            <p>For the body, brain and nervous system: Wheat or oat cereal, milk, fruit (and fruit juice), whole-grain bread, turkey, cheese, egg, nuts, shrimp, vegetables, brown rice, dried dates and figs.</p>
            <div style={{height:"20px"}}/>
            <p>• Prebiotic foods: Whole-wheat, banana, lettuce, peanuts, cashew nuts, onion. </p>
            <p>• Probiotic foods: Water kefir, fermented pickle, miso soup, kimchi.</p> 
            <div style={{height:"20px"}}/>
            <Box className='box-3'>
            <h4>Protein-free snack</h4>           
            <p>• Water kefir</p>
            <p>• Two portions of fresh fruit (banana, grapes, chopped pineapple, sliced oranges, kiwifruit or other fruit of choice)</p>
            <div style={{height:"20px"}}/>
            <h4>Low-Protein snack</h4>           
            <p>• A handful of peanuts or roasted cashew nuts</p>
            </Box>
            </p>
          </div>

          <div style={{height:"40px"}}/>  

          <div>
            <h4 style={{color:"rgb(255, 107, 0)"}}>Snacks Menu Two </h4>
            <div style={{height:"20px"}}/>
            <p className='para'>
            <p>For the body, brain and nervous system: Eggs, sausage, whole-grain bread, yoghurt, banana, fruit (and fruit juice), whole-grain crackers, peanut or almond butter, lentil or split pea soup, cheese, olives, popcorn, salmon, quinoa or baked potato, asparagus, tomato, whole-grain dinner roll, cantaloupe.</p>
            <div style={{height:"20px"}}/>
            <p>• Prebiotic foods: Whole-wheat toast, banana, peanut butter, lentil or split pea soup, asparagus, tomato. </p>
            <p>• Probiotic foods: Yoghurt, sauerkraut.</p> 
            <div style={{height:"20px"}}/>
            <Box className='box-4'>
            <h4>Low-protein or protein-free snack</h4>           
            <p>• Smoothie made with fruit and a milk alternative (almond milk, etc.)</p> 
            <p>• Rye or whole-grain cracker with peanut butter</p>    
            <p>• Popcorn</p>
            </Box>
            </p>
          </div>

          <div style={{height:"40px"}}/>  

          <div>
            <h4 style={{color:"rgb(194, 121, 36)"}}>Snacks Menu Three (For the people using rasagiline)</h4>
            <div style={{height:"20px"}}/>
            <p className='para'>
            <p>For the body, brain and nervous system: Oatmeal, milk, whole-wheat toast, whole-wheat blueberry muffin, tuna, whole-wheat bread, raw vegetables, milk or vegetable juice, yoghurt, banana, beef, Brussels sprouts, sweet potato, whole-grain dinner roll, baked apple.</p>
            <div style={{height:"20px"}}/>
            <p>• Prebiotic foods: Oatmeal, whole-wheat toast, muffin, bread, banana, sweet potato. </p>
            <p>• Probiotic foods: Yoghurt.</p> 
            <div style={{height:"20px"}}/>
            <Box className='box-3'>         
            <p>• Whole-wheat blueberry muffin with butter</p> 
            <p>• Plain yoghurt, with sliced banana and honey</p>    
            </Box>
            </p>
          </div>

          <div style={{height:"40px"}}/>  

          <div>
            <h4 style={{color:"rgb(255, 107, 0)"}}>Snacks Menu Four</h4>
            <div style={{height:"20px"}}/>
            <p className='para'>
            <p>For the body, brain and nervous system: Eggs, sausage, whole-wheat toast, berry compote, cottage cheese, cantaloupe, vegetable soup, whole-grain crackers, milk or vegetable juice, yoghurt, banana, shrimp, whole-grain linguine, spinach, carrots, garlic bread, chocolate.</p>
            <div style={{height:"20px"}}/>
            <p>• Prebiotic foods: Whole-wheat toast, vegetable soup with legumes, banana, garlic, chocolate.</p>
            <p>• Probiotic foods: Yoghurt.</p> 
            <div style={{height:"20px"}}/>
            <Box className='box-4'>         
            <p>• Cottage cheese, cantaloupe</p> 
            <p>• Plain yoghurt, with sliced banana and honey</p>    
            </Box>
            </p>
            <div style={{height:"70px"}}/>
          </div>
        </Box>


        <Box gridColumn="span 8">
        
          
        <div>
          <h4 style={{color:"rgb(0, 157, 174)"}}>Lunch Menu One (For the people using levodopa)</h4>
          <div style={{height:"20px"}}/>
          <p className='para'>
          <p>For the body, brain and nervous system: Wheat or oat cereal, milk, fruit (and fruit juice), whole-grain bread, turkey, cheese, egg, nuts, shrimp, vegetables, brown rice, dried dates and figs.</p>
          <div style={{height:"20px"}}/>
          <p>• Prebiotic foods: Whole-wheat, banana, lettuce, peanuts, cashew nuts, onion. </p>
          <p>• Probiotic foods: Water kefir, fermented pickle, miso soup, kimchi.</p> 
          <div style={{height:"20px"}}/>
          <Box className='box-5'>
          <p>• Sandwich on whole-grain bread, sliced turkey, cheese, lettuce, mayonnaise</p>
          <p>• Devilled egg</p>
          <p>• Deli-style fermented pickle</p>
          <p>• Milk, milk alternative or fruit juice</p>
          <p>• Coffee or tea</p>
          </Box>
          </p>
        </div>

        <div style={{height:"40px"}}/>

        <div>
          <h4 style={{color:"rgb(182, 213, 77)"}}>Lunch Menu Two</h4>
          <div style={{height:"20px"}}/>
          <p className='para'>
          <p>For the body, brain and nervous system: Eggs, sausage, whole-grain bread, yoghurt, banana, fruit (and fruit juice), whole-grain crackers, peanut or almond butter, lentil or split pea soup, cheese, olives, popcorn, salmon, quinoa or baked potato, asparagus, tomato, whole-grain dinner roll, cantaloupe.</p>
          <div style={{height:"20px"}}/>
          <p>• Prebiotic foods: Whole-wheat toast, banana, peanut butter, lentil or split pea soup, asparagus, tomato. </p>
          <p>• Probiotic foods: Yoghurt, sauerkraut.</p> 
          <div style={{height:"20px"}}/>
          <Box className='box-1'>
          <p>• Lentil or split pea soup</p>
          <p>• Whole-grain crackers</p>
          <p>• Cheese</p> 
          <p>• Mediterranean olives</p>
          <p>• Vegetable juice</p>
          <p>• Coffee or tea</p>
          </Box>
          </p>
        </div>

        <div style={{height:"40px"}}/>

        <div>
          <h4 style={{color:"rgb(0, 157, 174)"}}>Lunch Menu Three (For the people using rasagiline)</h4>
          <div style={{height:"20px"}}/>
          <p className='para'>
          <p>For the body, brain and nervous system: Oatmeal, milk, whole-wheat toast, whole-wheat blueberry muffin, tuna, whole-wheat bread, raw vegetables, milk or vegetable juice, yoghurt, banana, beef, Brussels sprouts, sweet potato, whole-grain dinner roll, baked apple.</p>
          <div style={{height:"20px"}}/>
          <p>• Prebiotic foods: Oatmeal, whole-wheat toast, muffin, bread, banana, sweet potato. </p>
          <p>• Probiotic foods: Yoghurt.</p> 
          <div style={{height:"20px"}}/>
          <Box className='box-5'>
          <p>• Tuna salad sandwich on whole-wheat bread</p>
          <p>• Raw carrot, celery, radishes</p>
          <p>• Fresh milk, vegetable juice, coffee or tea</p>
          </Box>
         
          </p>           
        </div>  

        <div style={{height:"40px"}}/>    

        <div>
          <h4 style={{color:"rgb(182, 213, 77)"}}>Lunch Menu Four</h4>
          <div style={{height:"20px"}}/>
          <p className='para'>
          <p>For the body, brain and nervous system: Eggs, sausage, whole-wheat toast, berry compote, cottage cheese, cantaloupe, vegetable soup, whole-grain crackers, milk or vegetable juice, yoghurt, banana, shrimp, whole-grain linguine, spinach, carrots, garlic bread, chocolate.</p>
          <div style={{height:"20px"}}/>
          <p>• Prebiotic foods: Whole-wheat toast, vegetable soup with legumes, banana, garlic, chocolate. </p>
          <p>• Probiotic foods: Yoghurt.</p> 
          <div style={{height:"20px"}}/>
          <Box className='box-1'>
          <p>• Vegetable soup (made with fresh ingredients including legumes, but no aged meats or meat extracts)</p>
          <p>• Whole-grain crackers</p>
          <p>• Fresh milk, vegetable juice, coffee or tea</p>
          
          </Box>
          <div style={{height:"70px"}}/>
          </p>           
        </div> 

      </Box>     
      <Box gridColumn="span 4">
       <img style={{with:"100%",maxWidth:"100%",maxHeight:"70%" ,height:"auto" }} src={lunch} alt = "Breakfast"/>   
      </Box>

      <Box gridColumn="span 4">
        <img style={{with:"100%",maxWidth:"70%",maxHeight:"70%" ,height:"auto" }} src={dinner} alt = "Snacks"/> 
        </Box>
        <Box gridColumn="span 8">
        <div>
            <h4 style={{color:"rgb(0, 157, 174)"}}>Dinner Menu One (For the people using levodopa)</h4>
            <div style={{height:"20px"}}/>
            <p className='para'>
            <p>For the body, brain and nervous system: Wheat or oat cereal, milk, fruit (and fruit juice), whole-grain bread, turkey, cheese, egg, nuts, shrimp, vegetables, brown rice, dried dates and figs.</p>
            <div style={{height:"20px"}}/>
            <p>• Prebiotic foods: Whole-wheat, banana, lettuce, peanuts, cashew nuts, onion. </p>
            <p>• Probiotic foods: Water kefir, fermented pickle, miso soup, kimchi.</p> 
            <div style={{height:"20px"}}/>
            <Box className='box-5'>
            <p>• Miso soup</p>
            <p>• Stir-fry of shrimp, snow peas, carrot, mushroom and onion</p>
            <p>• Kimchi</p>
            <p>• Brown rice</p>
            <p>• Soy sauce</p>
            <p>• Dates or figs</p>
            </Box>
            </p>
          </div>

          <div style={{height:"40px"}}/>    

          <div>
            <h4 style={{color:"rgb(142, 100, 170)"}}>Dinner Menu Two</h4>
            <div style={{height:"20px"}}/>
            <p className='para'>
            <p>For the body, brain and nervous system: Eggs, sausage, whole-grain bread, yoghurt, banana, fruit (and fruit juice), whole-grain crackers, peanut or almond butter, lentil or split pea soup, cheese, olives, popcorn, salmon, quinoa or baked potato, asparagus, tomato, whole-grain dinner roll, cantaloupe.</p>
            <div style={{height:"20px"}}/>
            <p>• Prebiotic foods: Whole-wheat toast, banana, peanut butter, lentil or split pea soup, asparagus, tomato. </p>
            <p>• Probiotic foods: Yoghurt, sauerkraut.</p> 
            <div style={{height:"20px"}}/>
            <Box className='box-2'>
            <p>• Grilled salmon</p>
            <p>• Cooked quinoa or baked potato with butter</p>
            <p>• Asparagus</p> 
            <p>• Sliced tomato</p>
            <p>• Sauerkraut</p>
            <p>• Whole-grain dinner roll</p>
            <p>• Cantaloupe half</p>
            </Box>
            </p>
          </div>

          <div style={{height:"40px"}}/>    

          <div>
          <h4 style={{color:"rgb(0, 157, 174)"}}>Dinner Menu Three (For the people using rasagiline)</h4>
          <div style={{height:"20px"}}/>
          <p className='para'>
          <p>For the body, brain and nervous system: Oatmeal, milk, whole-wheat toast, whole-wheat blueberry muffin, tuna, whole-wheat bread, raw vegetables, milk or vegetable juice, yoghurt, banana, beef, Brussels sprouts, sweet potato, whole-grain dinner roll, baked apple.</p>
          <div style={{height:"20px"}}/>
          <p>• Prebiotic foods: Oatmeal, whole-wheat toast, muffin, bread, banana, sweet potato. </p>
          <p>• Probiotic foods: Yoghurt.</p> 
          <div style={{height:"20px"}}/>
          <Box className='box-5'>
          <p>• Beef steak (fresh, not aged)</p>
          <p>• Brussels sprouts, lightly steamed with fresh lemon juice</p>
          <p>• Baked sweet potato with butter and honey</p>
          <p>• Whole-grain dinner roll with butter</p>
          <p>• Baked apple with maple syrup</p>
          </Box>
         
          </p>           
        </div>

        <div style={{height:"40px"}}/>    

        <div>
          <h4 style={{color:"rgb(142, 100, 170)"}}>Dinner Menu Four</h4>
          <div style={{height:"20px"}}/>
          <p className='para'>
          <p>For the body, brain and nervous system: Eggs, sausage, whole-wheat toast, berry compote, cottage cheese, cantaloupe, vegetable soup, whole-grain crackers, milk or vegetable juice, yoghurt, banana, shrimp, whole-grain linguine, spinach, carrots, garlic bread, chocolate.</p>
          <div style={{height:"20px"}}/>
          <p>• Prebiotic foods: Whole-wheat toast, vegetable soup with legumes, banana, garlic, chocolate. </p>
          <p>• Probiotic foods: Yoghurt.</p> 
          <div style={{height:"20px"}}/>
          <Box className='box-2'>
          <p>• Grilled shrimp with whole-grain linguine, extra-virgin olive oil, garlic</p>
          <p>• Fresh spinach salad</p>
          <p>• Roasted carrots</p>
          <p>• Whole-grain garlic bread</p>
          <p>• A few pieces of dark chocolate</p>
          
          </Box>
          <div style={{height:"70px"}}/>
          </p>           
        </div> 
        </Box>

      </Box>
    </Box>
    
        </div>
   
  
    );
}

